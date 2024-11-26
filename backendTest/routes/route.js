// const express = require("express");
// const router = express.Router();
// const Form = require("../module/module");

// router.post("/", async (req, res) => {
//     console.log("hello")
//     const form = new Form(req.body);
//     try{
//         const savedForm = await form.save();
//         res.json(savedForm)
//     }catch (err){
//         console.log(err)
//         res.send(err)
//     }
// })

// module.exports = router

const express = require("express");
const router = express.Router();
const Form = require("../module/module");

router.post("/", async (req, res) => {
    console.log("hello")
    const form = new Form(req.body);
    try{
        const savedForm = await form.save();
        res.json(savedForm)
    }catch (err){
        console.log(err)
        res.send(err)
    }
})

module.exports = router