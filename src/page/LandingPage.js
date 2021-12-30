import React, { useEffect, useState, useContext } from "react";
import { TeaContext } from "../context/TeaStore";
import { CartContext } from "../context/CartStore";

import "../css/LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Dropdown, DropdownButton } from "react-bootstrap";

var totalPrice = 0;
function LandingPage(){
    const [shopItemsList, setShopItemsList] = useState();
    const [state, dispatch] = useContext(TeaContext);
    const [cartState, cartDispatch] = useContext(CartContext);
    // const [totalPrice, setTotalPrice] = useState(0);

    // const [cartItem, setCartItem] = useState({"id": -1, "item": "default"})


    const teaDataDummy = {"chineseGreenTea": {"name":"Chinese Grean Tea","items":[{"name":"Long Jing","description":"Hand rolled using traditional tea processing techniques. Made in Huiming.","price":32,"imageUrl":"https://live.staticflickr.com/65535/51160674192_26de942c61_b.jpg", id: 0},{"name":"Dragon Jasmine Pearls","description":"Fragranced with fresh jasmine flowers.","price":14,"imageUrl":"https://live.staticflickr.com/3840/14573300652_4de0af9f45_o.jpg", id: 1},{"name":"De Jian Bamboo Dragon","description":"Originated from Guizhou China, 1200 meters above sea level.","price":25,"imageUrl":"https://live.staticflickr.com/65535/51254939227_799d311e8e_b.jpg", id: 2}]}}
    const teaData = state.data;

    const handleSelect = (e) =>{
        const hrefArray = e.split("/");
        let index = hrefArray[1];
        let grams = hrefArray[2];
        let price = hrefArray[3];

        let selector = document.getElementById("quantityselector"+index);
        selector.innerHTML = grams + ": $" + price
        
    }

    // let item = {"id": 1, "item": "hi"};
    // cartDispatch({type: 'SET_ITEM', payload: item});
    //     console.log(cartState)

    function addToCart(itemID, categoryName, teaName, description, imgSrc){
        console.log("add to cart called" + itemID)

        let currentSelection = document.getElementById("quantityselector"+itemID);
        
        if (currentSelection == null){
            return;
        }
        let currentSelectionText = currentSelection.innerHTML;


        console.log(currentSelectionText)
        let textinfo = currentSelectionText.split("g: $"); //[0] = grams, [1] = price

        let newItem = {"category": categoryName, "name": teaName, "description": description, "quantity": textinfo[0], 
                    "price": textinfo[1], "img": imgSrc};


        totalPrice = totalPrice + parseInt(textinfo[1]);
        // let newtotal = totalPrice + parseInt(textinfo[1]);
        // setTotalPrice(newtotal);
        // console.log(" TOTAL !!!!!!!!!!!!!!!!!!")
        console.log(totalPrice)
        
        cartDispatch({type: 'SET_ITEM', payload: {"id": itemID, "item": newItem}});
        cartDispatch({type: 'SET_TOTAL_PRICE', payload: totalPrice});
        alert("item successfully added to cart, click on checkout to view your current items.");
        
    }

    // useEffect(() =>{
    //     if (cartItem.id != -1){
    //         console.log(cartItem)
    //         console.log("cart item updated")
    //         cartDispatch({type: 'SET_ITEM', payload: cartItem});
    //         console.log(cartState)
    //     }        
    // }, [cartItem])

    useEffect(() => {
        let data = teaData
        if (Object.keys(data).length < 3){
            data = teaDataDummy;
        }

        var newList = []; //need category (on hover), item name (on hover), image src

        Object.keys(data).forEach(category => {

            const categoryData = data[category];
            categoryData.items.forEach((item, i) => {
                
                let discount10 = Math.round(item.price * 2 * 0.9); // 10% discount for 100g
                let discount20 = Math.round(item.price * 4 * 0.8); // 20% discount for 200g

                newList.push(
                    <Card className="shadow m-2" style={{ width: '18rem' }} key={item.id}>
                    {/* <div className="card shadow m-2"> */}
                        <Card.Img className="top p-2 pb-0" src={item.imageUrl} width="200" height="220"/>
                        <Card.Body>
                            <Card.Title>{categoryData.name} | {item.name}</Card.Title>
                            <Card.Text>
                                <span>{item.description}</span>
                            </Card.Text>
                            <div>
                            <Dropdown className="cart-selector px-0" onSelect={handleSelect}>
                                <Dropdown.Toggle className="p-1" variant="success" id={"quantityselector"+item.id}>
                                    50g: ${item.price}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href={"#/"+item.id+"/50g/"+item.price}>50g: ${item.price}</Dropdown.Item>
                                    <Dropdown.Item href={"#/"+item.id+"/100g/"+discount10}>100g: ${discount10}</Dropdown.Item>
                                    <Dropdown.Item href={"#/"+item.id+"/200g/"+discount20}>200g: ${discount20}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button className="p-1 mx-2" variant="outline-primary" 
                            onClick={()=>addToCart(item.id, categoryData.name, item.name, item.description, item.imageUrl)}>Add to Cart</Button>{' '}
                            </div>
                        </Card.Body>
                        {/* <Button variant="outline-primary">Add to Cart</Button> */}
                    {/* </div> */}
                    </Card>
                )
                
            })
        })
        setShopItemsList(newList);
        
    }, [teaData])

    return (
        <div className="flexbox-container">
            {shopItemsList}
        </div>
        
      );
}

export default LandingPage;