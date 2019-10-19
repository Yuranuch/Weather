import React, {Component} from 'react';
import SearchMenu from "./SearchMenu";
import styles from "./MainWrap.module.css"
import DisplayParams from "./DisplayParams"
import {connect} from "react-redux"


class MainWrap extends Component {

    searchCity = () => {

    }

    render() {
        return (
            <div className={styles.mainWrap}>
                <SearchMenu searchCity={this.searchCity }/>
                <DisplayParams params={this.props.params}/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        params: state.params
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect (mapStateToProps,mapDispatchToProps )(MainWrap)