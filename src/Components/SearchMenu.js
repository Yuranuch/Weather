import React, {Component} from 'react';

import styles from "./SearchMenu.module.css"

class SearchMenu extends Component {
    onSearchCity = () => {
        this.props.searchCity ()
    }

    render() {
        return (
            <div className={styles.searchMenu}>
                <div>
                    <input/>
                    <button onClick={this.onSearchCity}>Push</button>
                </div>
            </div>
        );
    }
}

export default SearchMenu;