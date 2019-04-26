import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';

import {FormLogin} from '../../components';
import {LoginText} from './login.text';
import ContainerMiddlePage from '../../components/Layouts/ContainerMiddlePage';

class App extends Component {
    handleChange = (event) =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = () =>{

    };

    handleRouteToRegister = async e => {
        await e.preventDefault();
        await this.props.history.push("/register");
    };

    render() {
        const staticText = tools.checkLanguage(LoginText);
        const { handleChange, handleSubmit, handleRouteToRegister } = this;

        return (
            <ContainerMiddlePage background="#eaeaea">
                <FormLogin
                    staticText={staticText}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleRouteToRegister={handleRouteToRegister}
                />
            </ContainerMiddlePage>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(App);
