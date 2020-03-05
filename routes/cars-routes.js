const express = require('express');
const router = express.Router();

const db = require('../data/config');

router.get("/", async (req,res,next) => {
    try {
      const cars = await db('cars');
      res.status(200).json(cars);
    }catch(err) {
      next(err);
    }
});

router.post("/", async (req,res,next) => {
  try {
    if(!req.body) req.status(404).json({msg:'Please make you are adding everything'});
    if(!req.body.VIN) req.status(404).json({msg:'VIN Number is missing'});
    if(!req.body.make) req.status(404).json({msg:'make  is missing'});
    if(!req.body.model) req.status(404).json({msg:'model  is missing'});
    if(!req.body.mileage) req.status(404).json({msg:'mileage  is missing'});
    if(!req.body.type) req.status(404).json({msg:'type  is missing'});
    if(!req.body.transmission) req.status(404).json({msg:'transmission type is missing'});
    console.log(req.body)
    const payload = {      
      VIN:req.body.VIN,
      make:req.body.make,
      model:req.body.model,
      mileage:req.body.mileage,
      type:req.body.type,
      transmission:req.body.type
    }
    const [id] = await db("cars").insert(payload);
    console.log(id)
    const newCar = await db("cars").where({id:id});
    res.status(201).json(newCar);

  }catch(err) {
    next(err);
  }
})

module.exports = router;
