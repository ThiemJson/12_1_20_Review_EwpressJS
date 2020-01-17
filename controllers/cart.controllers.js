const db = require('../db');

module.exports.showCart = (req,res)=>{
    let page = parseInt(req.query.page) || 1;
    let perPage = 7;

    let start = (page - 1)*perPage;
    let end = page + perPage;
    let allCart = db.get('products').value().slice(start,end);
    res.render("../views/cart.pug", {
        products: allCart
    });
}

module.exports.addToCart = (req,res)=>{
    let sessionID = req.signedCookies.sessionID;
    let productID = req.params.productID;
    let count = db.get("sessions").find({id: sessionID}).get("cart."+productID, 0).value();

    db.get("sessions")
      .find({id: sessionID})
      .set('cart.'+productID,count+1)
      .write();
    res.redirect("/shop");
}