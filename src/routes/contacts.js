const express = require('express');
const router = express.Router();

const contactosControl = requiere('../controllers/contacts.js');
//const dbmoongo = require('../db/connect.js');
/*
visualizaMensaje = (req,res)=>{
    const data = "como el telefono propose a su novia? ..el tiene su anillo";
    res.status(200).send(data);
};

module.exports ={
    visualizaMensaje,
}*/

router.get("/",contactosControl.getAll);
router.get("/:id",contactosControl.getSingle);

module.exports = router;