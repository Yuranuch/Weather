import React from 'react';
import styles from "./DisplayParams.module.css"


function DisplayParams(props) {


    return (

        <div className={styles.displayParams}>

            {props.params.name &&
            <div>
                <div><b>Name</b> {props.params.name}</div>
                <div><b>Country</b> {props.sys.country}</div>
                <div><b>Temperature(Kelvin)</b> {props.main.temp}</div>
                <div><b>Wind m/s</b> {props.wind.speed}</div>
                <div><b>Wind direction</b> {props.wind.speed}</div>
            </div>}

        </div>
    );
}

export default DisplayParams;

