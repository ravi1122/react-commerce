import React , {useContext , useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import styling from "../styles/Checkout.module.css";
import {StoreContext} from "../Context/StoreContext";
import Payment from "./Payment";
const Checkout = () => {
  const {checkouts ,total , checkoutsort} = useContext(StoreContext); 
  let [checkout,setCheckout]=  checkouts;
  const history = useHistory();
  let {filteredcheck} = checkoutsort;
  console.log(checkout);
  let {TotalCartPrice} =  total;


  return (
    <div  className={styling.Checkout}>
    <div  className={styling.CheckoutList}>
    <h1>List of Products</h1>
      {filteredcheck.map(check=> (
        <div key={Math.floor(Math.random() * 100000)} className={styling.CheckoutBox}>
        <div  className={styling.CheckoutRow}>
        <img src={check.image}/>
        <h4>{check.title}</h4>
        <h4>€{check.count * check.price}</h4>
        </div>

        </div>
      ))}

    </div>
{checkout==''?'':<div><h1>Total Price : €{TotalCartPrice}</h1> <h4 className={styling.checkoutInfo}>Pay with <strong>Paypal</strong> or <strong>Debit Card</strong></h4> <Payment/></div>}

    </div>
  );
};
export default Checkout;
