import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';
import TableRow from './TableRow';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', products: ''};
    }
    componentDidMount() {
        axios.get(MyGlobleSetting.url + '/api/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        if(this.state.products instanceof Array){
            return this.state.products.map(function(object, i){
                return <TableRow obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Products List - Demo</h1>

                <div className="row">
                    <div className="col-md-10"></div>
                    
                    <div className="col-md-2">
                       <Link to="/add-product">Add Product</Link>
                    </div>
                    </div><br />
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product Title</td>
                        <td>Product Body</td>
                        <td width="200px">Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                        { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Product;