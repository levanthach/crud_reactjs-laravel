import React, {Component} from 'react';
import { Link } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: '',
      productBody: ''
    }
  }
  
  componentDidMount(){
    // Router laravel
    console.log(this.props.match.params.id);
    axios.get(MyGlobleSetting.url + '/api/products/${this.props.mathch.params.id}/edit')
    .then(response => {
      this.setState({ productTitle: response.data.title, productBody: response.data.body });
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
    console.log(name);
    console.log(value);

    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      title: this.state.productTitle,
      body: this.state.productBody  
    }
    let uri = MyGlobleSetting.url + '/api/products' + this.props.params.id;
    axios.post(uri, product).then((response) => {
      // browserHistory.push('/product');
      // alert("Thêm sản phẩm thành công!");
      window.location.href = MyGlobleSetting.url + '/#/product';
    });
  }
    render() {
      return (
      <div>
        <h1>Update Product</h1>
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <Link to="/product" className="btn btn-success">Return to Products</Link>
          </div>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Product Title:</label>
                <input type="text" className="form-control" name="productTitle" defaultValue={this.state.productTitle} onChange={(event) => {this.isChange(event)}}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Product Body:</label>
                  <input type="text" className="form-control" name="productBody" value={this.state.productBody} onChange={(event) => {this.isChange(event)}}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Update Product</button>
            </div>
        </form>
  </div>
      )
    }
}
export default AddProduct;