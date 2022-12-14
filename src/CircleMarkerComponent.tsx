import React, {Component} from "react";
import {CircleMarker, Popup} from "react-leaflet";
import locations from "./locations.json";


class MicrowaveLocationComponent extends Component<{},{}> {

    render() {
        let cMarkers = [];

        for (let i = 0; i < locations.length; i++) {
            cMarkers.push(
                <CircleMarker key={locations[i].name} center={[locations[i].x,locations[i].y]} pathOptions={{ color: 'purple' }} radius={20} >
                <Popup>{locations[i].msg}</Popup>
                </CircleMarker>
            );
        }

        return (
            cMarkers
        );
    }
}

export default MicrowaveLocationComponent;