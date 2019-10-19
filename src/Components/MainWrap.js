import React, {Component} from "react"
import SearchMenu from "./SearchMenu"
import styles from "./MainWrap.module.css"
import DisplayParams from "./DisplayParams"
import {connect} from "react-redux"
import * as axios from "axios";
import {getCityName, getCityParams} from "./redux/reducer";


class MainWrap extends Component {

    getCity = (cityName) => {
        this.props.getCityName(cityName)
    }

    searchCity = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.name}&appid=df2f388e143c802f514a70269fc816c2`)
        // London,uk
            .then(res => {
                this.props.getCityParams (res.data)
            })
    }

    render() {

        return (
            <div className={styles.mainWrap}>
                <SearchMenu getCity={this.getCity} searchCity={this.searchCity }/>
                <DisplayParams {...this.props}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        params: state.params,
        main: state.params.main,
        sys: state.params.sys,
        name: state.name,
        wind: state.params.wind
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCityParams: (params) => {
            dispatch(getCityParams(params))
        },
        getCityName: (cityName) => {
            dispatch (getCityName(cityName))
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps )(MainWrap)