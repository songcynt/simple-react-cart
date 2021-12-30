import React from "react";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import "../css/PageHeader.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PageHeader(){
    return (
        <div className="web-page-header">
            <Link to="/" className="links-decor">
                <h1 className="py-1 px-2 ml-3" id="site-name">Uof [Good] Tea!</h1>
            </Link>
            <Link to="/checkout" className="links-decor" id="checkout-button">
                <Button variant="secondary" className="mx-3">Checkout</Button>
            </Link>
        </div>
        
      );
}

export default PageHeader;