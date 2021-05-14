import {
    FETCH_DATA,
    FILTER_BY_ROCKETNAME,
    FILTER_BY_STATUS,
    FILTER_BY_ISUPCOMING
  } from "./types";
  
  export const fetchData = () => (dispatch) => {

      fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FETCH_DATA, payload: data });
      });

   
  };
  
  export const filterProductsByRocketName = (products, name) => (dispatch) => {
    console.log("products ",products);
    console.log("name ",name);
   
    dispatch({
      type: FILTER_BY_ROCKETNAME,
      payload: {
        name: name,
        items:
        name === ""
            ? products
            :products.filter(o => o.rocket.rocket_name.toLowerCase().includes(name.toLowerCase()))
        },
    });
  };
  
  export const filterProductsByStatus = (items, status) => (dispatch) => {
    const products = items.slice();
  
    dispatch({
      type: FILTER_BY_STATUS,
      payload: {
        status: status,
        items:
        status===""?products :(
        status === "true"
            ?  products.filter(
                (x) => x.launch_success===true
              )
            : products.filter(
                (x) => x.launch_success===false
              )),
      },
    });
  };


  
  export const filterProductsByUpcoming = (items, isUpcoming) => (dispatch) => {
    const products = items.slice();
  console.log("isUpcoming ",isUpcoming);
    dispatch({
      type: FILTER_BY_ISUPCOMING,
      payload: {
        isUpcoming: isUpcoming,
        items:
       
        isUpcoming === true
            ?  products.filter(
                (x) => x.upcoming===true
              )
            : products.filter(
                (x) => x.upcoming===false
              ),
              
      },
      
    });

    
  };