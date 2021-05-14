import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/productActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const productItems = this.props.products.map((product) => (
        <div className="m-3"> <div className="card">
        <div className="card-body" >
          <h4 className="card-title"> {product.mission_name} </h4>
          <h5> {`Rocket: ${product.rocket.rocket_name}`} </h5>
          <h6> {`Launch Year: ${product.launch_year}`} </h6>
          <h6>{`Status: ${product.launch_success===true ? 'Success' :'Failure' }`}</h6>
          <a href="#" className="btn btn-primary">Select</a>
        </div>
      </div></div> 
   
    ));

    return <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }} >{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
 
});
export default connect(mapStateToProps, { fetchData })(Products);
