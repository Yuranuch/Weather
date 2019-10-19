import React from 'react';
import styles from "./DisplayParams.module.css"


function DisplayParams(props) {



    return (

        <div className={styles.displayParams}>
            <div>{props.params.name}</div>
            <div> {props.sys.country}</div>
            <div>{props.main.temp}</div>
            <div>{props.wind.speed}</div>
        </div>
    );
}

export default DisplayParams;

