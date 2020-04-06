import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./Home";
import editProduct from "./EditProduct";
import AddProduct from "./AddProduct";
import Product from "./Product";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/edit-product/:id' component={editProduct}/>
                    <Route exact path='/product' component={Product}/>
                    <Route exact path='/add-product' component={AddProduct}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath;