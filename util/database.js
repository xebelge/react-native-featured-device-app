import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const database = SQLite.openDatabase("places.db");

export function init() {

    const promise = new Promise((resolve, reject) => {
        database.transaction((transactionObj) => {
            transactionObj.executeSql(
                `CREATE TABLE IF NOT EXISTS Places(
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL ,
                lng REAL NOT NULL 
       )`,
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function insertPlace(place) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((transactionObj) => {
            transactionObj.executeSql(`INSERT INTO Places(title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [place.title, place.imageUri, place.address, place.location.lat, place.location.lng],
                (_, result) => {
                    resolve(result);
                },
                (_, reject) => {
                    reject(error)
                },
            );
        });
    });
    return promise;
}

export function fetchPlaces() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((transactionObj) => {
            transactionObj.executeSql('SELECT * FROM Places',
                [],
                (_, result) => {
                    const places = [];

                    for (const dp of result.rows_array) {
                        places.push(
                            new Place(
                                dp.title,
                                dp.imageUri,
                                {
                                    address: dp.address,
                                    lat: dp.lat,
                                    lng: dp.lng
                                },
                                dp.id));
                    }
                    resolve(places);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function fetchPlaceDetails(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((transactionObj) => {
            transactionObj.executeSql(
                'SELECT * FROM Places WHERE id = ?',
                [id],
                (_, result) => {
                    resolve(result);
                },
                (_, reject) => {
                    reject(error)
                }
            );
        });
    });
    return promise;
}