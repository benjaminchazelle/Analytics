import React, {Component} from "react"
import PropTypes from "prop-types";
import {ComposableMap, Geographies, Geography, Marker, Markers, ZoomableGroup} from "react-simple-maps"
import Button from '@material-ui/core/Button';

const mapMarkerColors = {
    Bot: "#fdd835",
    Human: "#2196f3"
};

const wrapperStyles = {
    width: "100%"
};


class VisitsMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [0, 20],
            zoom: 1
        };
        this.handleMarkerSelection = this.handleMarkerSelection.bind(this);
        this.handleReset = this.handleReset.bind(this)
    }

    handleMarkerSelection(evt) {
        const visitId = evt.target.getAttribute("data-visit");
        const visit = this.props.data[visitId];
        this.setState({
            center: this.getVisitMarker(visit).coordinates,
            zoom: 10,
        })
    }

    handleReset() {
        this.setState({
            center: [0, 20],
            zoom: 1,
        })
    }

    render() {
        return (
            <div>
                <h2>World map</h2>

                {
                    Object.keys(mapMarkerColors).map((type) => {
                        const style = {
                            color: mapMarkerColors[type],
                            margin: "0 7px"
                        };
                        return <><span style={style}>■</span><b>{type} visits</b></>
                    })
                }
                <div style={wrapperStyles}>
                    <ComposableMap
                        projectionConfig={{
                            scale: 200,
                        }}
                        style={{
                            width: "100%",
                            height: "400px",
                        }}
                    >
                        <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
                            <Geographies geography="/static/world.json">
                                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                                    <Geography
                                        key={i}
                                        geography={geography}
                                        projection={projection}
                                        style={{
                                            default: {
                                                fill: "#ECEFF1",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#607D8B",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "#607D8B",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none",
                                            },
                                        }}
                                    />
                                ))}
                            </Geographies>
                            <Markers>
                                {
                                    this.props.data.map((visit, i) => (
                                        <Marker key={i} marker={this.getVisitMarker(visit)}>
                                            <circle data-visit={i} onClick={this.handleMarkerSelection}
                                                    cx={0}
                                                    cy={0}
                                                    r={8}
                                                    fill={this.getColorByVisit(visit)}
                                                    stroke={this.getColorByVisit(visit)}
                                                    opacity="0.75"
                                            />
                                            <title>{this.getVisitMarker(visit).name}</title>
                                        </Marker>
                                    ))
                                }
                            </Markers>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
                <div>
                    <Button onClick={this.handleReset}>
                        {"Reset"}
                    </Button>
                </div>
            </div>
        )
    }

    getColorByVisit(visit) {
        if (visit.agent.bot) {
            return mapMarkerColors.Bot
        } else {
            return mapMarkerColors.Human
        }
    }

    getVisitMarker(visit) {
        return {
            name: [visit.geocode.ip, visit.geocode.city, visit.geocode.org].filter(item => item !== null).join(" - "),
            coordinates: [visit.geocode.longitude, visit.geocode.latitude]
        }
    }
}

VisitsMap.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VisitsMap
