import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {Container} from 'reactstrap';

import {AppText} from './app.text';


class App extends Component {

    state = {
        add: '',
        search: '',
        price: 0,
        addUpdate: '',
        priceUpdate: '',
        updateAt: 0,
    };

    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleAdd = () => {
        let data = {
            name: this.state.add,
            price: this.state.price
        }
        this.props.postSong(async () => {
        }, data);
    };

    handleUpdate = (id) => {
        let data = {
            name: this.state.addUpdate,
            price: this.state.priceUpdate
        }
        this.props.putSong(async () => {
        }, id, data);
    };

    handleGetData = (name, price, id) => {
        this.setState({
            addUpdate: name,
            priceUpdate: price,
            updateAt: id
        })
    };

    handleDelete = (id) => {
        this.props.delSong(async () => {
        }, id);
    };
    
    componentWillMount() {
        this.props.getSongs(async () => {
        });
    }

    render() {
        const staticText = tools.checkLanguage(AppText);
        return (
            <Container>
                <h5 className="display-4">search</h5>
                <input type="text" name="search" onChange={this.handleChange}/>
                <hr/>
                {
                    this.props.songStore.all ?
                        this.state.search ?
                            this.props.songStore.all.map((data, index) => {
                                if (data.name.match(this.state.search)){
                                    return (
                                        <div key={index}>
                                            <li>{data.id + " " + data.name + " " + data.price}</li>
                                            <button>edit</button>
                                            <button onClick={() => this.handleDelete(data.id)}>delete</button>
                                        </div>
                                    )
                                }
                            })
                            :
                            this.props.songStore.all.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <li>{data.id + " " + data.name + " " + data.price}</li>
                                        <button onClick={() => this.handleGetData(data.name, data.price, data.id)}>edit</button>
                                        <button onClick={() => this.handleDelete(data.id)}>delete</button>
                                    </div>
                                )
                            })
                        :
                        <p>no song</p>
                }
                <hr/>
                <h5 className="display-4">update</h5>
                <input type="text" name="addUpdate" value={this.state.addUpdate} onChange={this.handleChange}/>
                <input type="number" name="priceUpdate" value={this.state.priceUpdate} onChange={this.handleChange}/>
                <button onClick={() => this.handleUpdate(this.state.updateAt)}>update</button>
                <hr/>
                <h5 className="display-4">add</h5>
                <input type="text" name="add" onChange={this.handleChange}/>
                <input type="number" name="price" onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>add</button> {this.props.songStore.msg}
            </Container>
        );
    }
}

const mapStateToProps = ({lang, songStore}) => {
    return {
        lang, songStore
    }
};

export default connect(mapStateToProps, action)(App);
