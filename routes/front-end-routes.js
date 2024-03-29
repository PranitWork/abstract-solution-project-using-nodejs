const express = require("express");

const contactDB = require("../model/ContactDB");

const route = express.Router();



route.get("/", (req, resp) => {
    resp.render("home");
});

route.get("/services", (req, resp) => {
    resp.render("services")
});

route.get("/project", (req, resp) => {
    resp.render("project")
});


route.get("/pricing", (req, resp) => {
    resp.render("pricing")
});


route.get("/contact-us", (req, resp) => {
    resp.render("contact-us")
});

route.post("/contact-us", async (req, resp) => {
    const { name, number, email, message, company } = req.body;
    try {

        const contactData = await contactDB.create({
            name: name,
            email: email,
            contactNo: number,
            companyName: company,
            message: message,
        });
        console.log("data inserted", contactData)
    } catch (err) {
        console.log(err)
    }

});

route.get("/about-us", (req, resp) => {
    resp.render("about-us")
})


route.get("/privacy-policy", (req, resp) => {
    resp.render("privacy-policy")
})


// packages route start

// wordpress package open
route.get("/packages/wordpress-package", (req, resp) => {
    resp.render("package/wordpress-website")
})
// wordpress package close

// shopify package open
route.get("/packages/shopify-package", (req, resp) => {
    resp.render("package/shopify-website")
})

// shopify package close 
// packages route stop


// 404 page route open

route.get("*", (req, resp) => {
    resp.render("404-page/404");
})

// 404 page route close


module.exports = route;