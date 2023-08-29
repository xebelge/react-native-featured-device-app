import * as SQLite from "expo-sqlite";

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

export function inserPlace(place) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((transactionObj) => {
            transactionObj.executeSql(`INSERT INTO Places(title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [place.title, place.imageUri, place.address, place.location.lat, place.location.lng],
                (_, result) => {
                    console.log(result);
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