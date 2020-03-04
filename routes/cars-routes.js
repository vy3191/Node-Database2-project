const express = require('express');
const router = express.Router();

router.get("/", (req,res,next) => {
    res.json({msg:'app is running now'})
})

module.exports = router;
