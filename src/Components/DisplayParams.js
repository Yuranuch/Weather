import React from 'react';
import styles from "./DisplayParams.module.css"


function DisplayParams(props) {
    return (
        <div className={styles.displayParams}>
            <div>{props.params.id}</div>
            <div>{props.params.name}</div>
            <div>{props.params.visibility}</div>
            <div>{props.params.cod}</div>


        </div>

    );
}

export default DisplayParams;

