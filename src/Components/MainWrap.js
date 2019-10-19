import React from 'react';
import SearchMenu from "./SearchMenu";
import styles from "./MainWrap.module.css"

function MainWrap() {
    return (
        <div className={styles.mainWrap}>
            <SearchMenu />
        </div>
    );
}

export default MainWrap;