import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: '',
      productBody: ''
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      title: this.state.productTitle,
      body: this.state.productBody  
    }
    let uri = MyGlobleSetting.url + '/api/products';
    axios.post(uri, product).then((response) => {
      // browserHistory.push('/product');
      // alert("Thêm sản phẩm thành công!");
      window.location.href = MyGlobleSetting.url + '/#/product';
    });
  }
    render() {
      return (
      <div>
        <h1>Create A Product</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Product Title:</label>
                <input type="text" className="form-control" name="productTitle" onChange={(event) => {this.isChange(event)}} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Product Body:</label>
                  <input type="text" className="form-control" name="productBody" onChange={(event) => {this.isChange(event)}}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Product</button>
            </div>
        </form>
  </div>
      )
    }
}
export default AddProduct;