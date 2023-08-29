import { View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { Colors } from '../constants/color';
import OutlinedButton from "../components/UI/OutlinedButton";
import { useEffect } from "react";

function PlaceDetails() {
    function showOnMapHandler({ route }) {

    }

    const selectedPlaceId = route.params.placeId;

    useEffect(() => {

    }, [selectedPlaceId]);

    return (
        <ScrollView >
            <Image style={styles.image} />
            <View style={styles.locationContainer} >
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>ADDRESS</Text>
                </View>
                <OutlinedButton icon="map" onPress={showOnMapHandler}>View on Map</OutlinedButton>
            </View>
        </ScrollView>
    );
}

export default PlaceDetails;

const styles = StyleSheet.create({
    screen: {
        alignItems: "center"
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: Colors.primary500,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
    }
})