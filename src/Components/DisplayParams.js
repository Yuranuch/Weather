import React from 'react';
import styles from "./DisplayParams.module.css"


function DisplayParams(props) {


    return (

        <div className={styles.displayParams}>

            {props.params.name &&
            <div>
                <span><b>Name</b> {props.params.name}</span>
                <span><b>Country</b> {props.sys.country}</span>
                <span><b>Temperature(Kelvin)</b> {props.main.temp}</span>
                <span><b>Wind m/s</b> {props.wind.speed}</span>
            </div>}

        </div>
    );
}

export default DisplayParams;

