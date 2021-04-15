module.exports = app => {
    const { body, validationResult } = require('express-validator');
    const Router = require("express").Router();
    const conntrollerClient = require("../controllers/client.controller");
    const middleWare = require("../middleware/authenticateAdmin")


    Router.route("/login").post(conntrollerClient.loginClient);

    Router.route("/register").post(conntrollerClient.registerClient);

    Router.route("/confirm/:confirmationCode").get(conntrollerClient.verifyClient);
    Router.route("/").get(middleWare.admin,conntrollerClient.getClient);

    Router.route("/delete/:idClient").delete(middleWare.admin,conntrollerClient.deleteClient);
    Router.route("/update/:idClient").put(conntrollerClient.updateClient);
    

    app.use("/client", Router);
}