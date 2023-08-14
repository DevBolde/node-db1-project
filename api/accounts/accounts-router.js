const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try{
    res.json({},{})
  }catch(err){
    next({status:422, message: 'this is horrible'})
  }
})

router.get('/:id', async (req, res, next) => {
  try{
    res.json({},{})

  }catch(err){
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    res.json({},{})
  }catch(err){
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try{
    res.json({},{})
  }catch(err){
    next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  try{
    res.json({},{})
  }catch(err){
    next(err)
  }
})

router.use( (err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
 res.status(err.status || 500).json({
  message:err.message
 })
})



module.exports = router;
