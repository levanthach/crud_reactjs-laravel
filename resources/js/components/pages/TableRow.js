import React, { Component } from 'react';
import { Link } from 'react-router';
 
class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.body}
          </td>
          <td>
            
          <Link to={"edit-product/" + this.props.obj.id} className="btn btn-success" style={{marginRight: '5px'}}>Edit</Link>
          <Link to={"delete-product/" + this.props.obj.id} className="btn btn-danger">Delete</Link>
          </td>
        </tr>
    );
  }
}
 
export default TableRow;
 