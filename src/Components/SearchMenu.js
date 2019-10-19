import React from 'react';

import styles from "./SearchMenu.module.css"

function SearchMenu() {
    return (
        <div className={styles.searchMenu}>
            <div>
                <input/>
                <button>Push</button>
            </div>
        </div>
    );
}

export default SearchMenu;