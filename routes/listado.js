const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//Getting all
router.get('/', async (req,res) =>{
  try{
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  }catch(err){
    res.status(500).json({
        message: err.message
    })
  }
})
//getting one
router.get('/:id', getSubscriber, (req,res) =>{
    res.json(res.subscriber)
})
//creating one
router.post('/', async (req,res) =>{
    const subscriber = new Subscriber({
        name: req.body.name,
        Descripcion: req.body.Descripcion,
        Anime: req.body.Anime
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
//updating one
router.patch('/:id', getSubscriber, async (req,res) =>{
    if (req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if (req.body.Descripcion != null){
        res.subscriber.Descripcion = req.body.Descripcion
    }
    if (req.body.Anime != null){
      res.subscriber.Anime = req.body.Anime
  }
    try{
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
// Deleting One
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
      await res.subscriber.deleteOne()
      res.json({ message: 'Deleted character' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  async function getSubscriber(req, res, next) {
    let subscriber
    try {
      subscriber = await Subscriber.findById(req.params.id)
      if (subscriber == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.subscriber = subscriber
    next()
  }
  
  module.exports = router
  