import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AppErr from '../../AppErr';
import * as actions from '../../store/actions/index';
import Admin from '../../components/admin/admin';
import Loading from '../../components/loader/loader';
import LinearProgress from '@material-ui/core/LinearProgress';

class Library extends Component {
    componentDidMount() {
        // this.props.onInitData();
    }
    dataRender() {
        switch(this.props.status){
            case 200:
                return(
                    <Admin />
                )
            case 503:
                return <AppErr errorcode={"[503] Service Unavailable!"} 
                    info={"Server is down, kindly refresh the page"} />
            case 204:
                return <AppErr errorcode={"[204] No Response!"} 
                    info={"Data cannot find in the server, check URL or contact the administrator"}/>
            default:
                // return <LinearProgress />
                return <p>Loading</p>
        }
    }
    render() {
        return this.dataRender();
        // return <Admin />
    }
}

const mapStateToProps = state => {
    return {
        status: state.status
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitData: () => dispatch(actions.initData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
