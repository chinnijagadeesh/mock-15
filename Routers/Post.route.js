// const express = require("express")
const { postModel } = require("../models/Post.model")
// const router = express.Router()
const {Router} = require("express")
const router = Router()

router.get("/",async(req,res)=>{
    let query = req.query
    try
    { 
        const data = await postModel.find(query)
        data.length!=0?res.send(data):res.send(`<img src="https://tse1.mm.bing.net/th?id=OIP.Lbt8T3Zp43nS8zSOB9vviAHaFg&pid=Api&P=0"/>`)
    }
    catch(err)
    {
        console.log(err)
        res.send("Err:something went wrong")
    }
    });



    router.post("/post_data",async(req,res)=>{
    
        const data = req.body
        try
        {
           const trip =  new postModel(data)
           await trip.save()
            // console.log(trip)
            console.log("SuccessFully add Data to the DB")
            res.send("SuccessFully add Data to the DB")
        }
        catch(err){
            console.log(err)
            res.send("Err, Something went to be Wrong")
        }
    })
    





// router.patch("/update/:id",async(req,res)=>{
//     const id = req.params.id
//     const payload = req.body
//     try
//     {
//         await booksModel.findByIdAndUpdate({_id:id},payload)
//         console.log("SuccessFully updated Data from the DB")
//         res.send(`Successfully, Updated task with the Id ${id}`)
//     }
//     catch(err){
//         console.log(err)
//         res.send("Err, Something went to be Wrong")
//     }
// })

// router.delete("/delete/:id",async(req,res)=>{
//     const id = req.params.id
//     try
//     {
//         await booksModel.findByIdAndDelete({_id:id}) 
//         console.log("SuccessFully deleted Data from the DB")
//         res.send("SuccessFully deleted Data from the DB")
//     }
//     catch(err){
//         console.log(err)
//         res.send("Err, Something went to be Wrong")
//     }
// })



module.exports = router

