const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const { db } = require('../models/User');
router.post('/foodData', (req, res) => {
    try {
        console.log("global food item:----", global.food_items);
        res.send([global.food_items, global.foodCategory])
    }
    catch (error) {
        console.log(error.message);
        res.send("Server Error")
    }
})

router.post('/find', async (req, res) => {

    const { name } = req.body;

    var posts;
    if (name != '' && name != null) {
        // console.log("hello " , db.collection("food_items"))
        posts = await db.collection("food_items").aggregate(
            [
                {
                    $search: {
                        "index":"default",

                        'compound': {
                            'should':[
                                {
                                    'autocomplete':{
                                        'query':name,
                                        'path':'name'
                                    }
                                },
                                {
                                    'autocomplete':{
                                        'query':name,
                                        'path':'CategoryName'
                                    }
                                }
                            ],
                            'minimumShouldMatch':1
                        }
                    }
                }
            ]
        );
        if (posts.length > 0)
        {
            console.log("hello hello ", posts)
            res.send(posts);
        }
        else{
            console.log("hello ",posts)
            res.send({alert:false})
        }


    }
})

module.exports = router;