import React, { useEffect, useState, useContext } from "react";

import { CartContext } from "../context/CartStore";
import { Button} from "react-bootstrap";


import "../css/CheckoutPage.css";

function CheckoutPage(){
  const [checkoutList, setCheckoutList] = useState();
  const [discountCode, setDiscountCode] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [promoDiscountAmount, setPromoDiscountAmount] = useState(0);
  const [cartState, cartDispatch] = useContext(CartContext);


  function applyDiscount(e){
    var amount;
    if (discountCode === "uoft15"){
      amount = Math.round(totalPrice * 0.15);
    }
    setPromoDiscountAmount(amount);
  }

  function removeFromCart(itemKey){
    cartDispatch({type: 'REMOVE_ITEM', payload: itemKey});
  }
  
  function confirmCheckout(){
    let t = totalPrice - promoDiscountAmount;
    let aftertax = t * 1.13;

    alert("thanks you for shopping at Uof [Good] Tea! Your grand total will be " + aftertax.toFixed(2));
  }

  useEffect(() => {
    console.log("in checkout")
    console.log(cartState)

    let totalPrice = 0
    const newList = []
    
    Object.keys(cartState.items).forEach((itemKey, i) => {
      const item = cartState.items[itemKey];
      if (item !== undefined){
        totalPrice += Number(item.price);
        newList.push(<div className="card flex-row flex-wrap" key={i}>
          <div className="card-header border-0">
              <img src={item.img} width="200" height="220" alt=""/>
          </div>
          <div className="card-block px-2">
              <h3 className="card-title">{item.category}</h3>
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-secondary" 
                onClick={()=>removeFromCart(itemKey)}>
                Remove From Cart
              </a>
          </div>
          <div className="w-100"></div>
          <div className="card-footer w-100 text-muted">
              {`${item.quantity}g: $ ${item.price}`}
          </div>
        </div>);
      }
    })

    setCheckoutList(newList);
    console.log(totalPrice)
    setTotalPrice(totalPrice)

  }, [cartState])

  return (
    <div className="checkout_container p-4 m-2">
      {checkoutList}
      <input className="my-4" type="text" value={discountCode} id="discountinputbox"
      onChange={(e) => setDiscountCode(e.target.value)} placeholder="Enter discount code:"></input>
      <Button className="p-1 m-2" variant="outline-secondary" onClick={()=>applyDiscount()}>Apply Discount</Button>{' '}
      <h4>Subtotal after quantity discount: ${totalPrice}</h4>
      <h6>Discount amount: ${promoDiscountAmount}</h6>
      <h4>Total before taxes: ${totalPrice - promoDiscountAmount}</h4>
      <Button variant="outline-primary" onClick={()=>confirmCheckout()}>Confirm</Button>{' '}
    </div>
    );
}

export default CheckoutPage;