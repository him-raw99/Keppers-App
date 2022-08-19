import React from "react";

const date=new Date().getFullYear();

function Footer(){
    return <h1 className="footer-data">Copyright @{date}</h1>;
}

export default Footer;