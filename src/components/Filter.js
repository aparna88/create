import React, { Component } from "react";
import { connect } from "react-redux";

import { filterProductsByRocketName, filterProductsByStatus ,filterProductsByUpcoming} from "../actions/productActions";
class Filter extends Component {
  render() {
   
    return (
      <div className="row">
        <div className="col-md-2">{`${this.props.filteredProducts.length} records found.`}</div>
        <div className="col-md-2">
          <label>
            Filter by status
            <select
              className="form-control"
              onChange={(event) => {
                this.props.filterProductsByStatus(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">All</option>
              <option value="true">Success</option>
              <option value="false">Failure</option>
            </select>
          </label>
        </div>
        <div className="col-md-3">
          <label>
            {" "}
            Serach by rocket name
            <input
          className="form-control"
          placeholder = "Rocket name"
          onChange={(event) => {
            this.props.filterProductsByRocketName(
              this.props.products,
              event.target.value
            );
          }}
           />
          </label>
        </div>

        <div className="col-md-4">
       
          <label>
            {" "}          
            <input className="form-check-input" type="checkbox"
             onChange={(event) => {
              this.props.filterProductsByUpcoming(
                this.props.products,
                event.target.checked
              );
            }}/> Is Upcoming ?
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  
});
export default connect(mapStateToProps, { filterProductsByRocketName, filterProductsByStatus ,filterProductsByUpcoming })(
  Filter
);
