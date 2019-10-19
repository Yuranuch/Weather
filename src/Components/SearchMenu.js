import React, {Component} from "react"
import styles from "./SearchMenu.module.css"

class SearchMenu extends Component {
    onSearchCity = () => {
        this.props.searchCity ()
    }
    getCityName = (e) => {
        const cityName = e.currentTarget.value
        this.props.getCity(cityName)
    }

    render() {
        return (
            <div className={styles.searchMenu}>
                <div>
                    <input onChange={this.getCityName}/>
                    <button onClick={this.onSearchCity}>Push</button>
                </div>
            </div>
        );
    }
}

export default SearchMenu;