var express = require('express');

var router = express.Router();
// Import the model (burgers.js) to use its database functions.
var cat = require("../models/cat.js");
var burger = require('../models/burgers.js');

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res){
  burger.all(function(data){
    var hbsObject = {
      burgers: data //burgers = table
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res){
  burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result){
    res.json({ id: result.insertId});
  });
});

router.put("/api/burgers/:id", function(req, res){
  var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result){
      if (result.changedRows === 0){
        return res.status(404).end();
      }
      res.status(200).end();
        }
  );
});

module.exports = router;
