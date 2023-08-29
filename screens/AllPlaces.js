import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
    const isFocused = useIsFocused();
    const [loadedPlaces, setLoadedPlaces] = useState();

    useEffect(() => {
        async function loadPlaces() {
            const places = await fetchPlaces();
            setLoadedPlaces(places);
        }

        if (isFocused) {
            loadPlaces();
            // setLoadedPlaces((currentPlaces) => [...currentPlaces, route.params.place]);
        }
    }, [isFocused]);

    return <PlacesList places={loadedPlaces} />
}

export default AllPlaces;