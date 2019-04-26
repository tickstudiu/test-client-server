import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

import * as tools from "../../utils/index";
import * as actions from "../actions/index";

import {FooterTextOnly, Loader, NavbarLang} from "../../components/index";
import {AppText} from "../../pages/App/app.text";

export const Public = ComposedComponent => {
    class Public extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            }
        }

        componentWillMount() {
            if (!tools.getLanguage()) {
                tools.setDefaultLanguage();
            }
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        }

        handleChagneLang = (lang) => {
            this.props.changeLanguage(lang);
        };

        render() {
            const {loading} = this.state;
            if (loading) {
                return <Loader/>
            }

            const lang = tools.getLanguage(AppText);
            const {handleChagneLang} = this;

            return (
                <Fragment>
                    <NavbarLang handleChagneLang={handleChagneLang} lang={lang}/>
                    <ComposedComponent {...this.props} />
                    <FooterTextOnly footerText="Copyright By tickstudiu"/>
                    <ToastContainer/>
                </Fragment>
            );
        }
    }

    const mapStateToProps = ({lang}) => {
        return {
            lang
        };
    };

    return connect(mapStateToProps, actions)(Public);
};
