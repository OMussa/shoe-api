const { request } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(cors())

let jordanShoes = {
    'bred 4': {
        'color' : 'black and red',
        'height' : 'mid',
        'release year' : '1989'
    },
    'royal 1': {
        'color' : 'black and blue',
        'height' : 'high',
        'release year' : '1985'
    },
    'cool grey 11': {
        'color' : 'grey and white',
        'height' : 'high',
        'release year' : '2001'
    },
    'shattered backboard 1': {
        'color' : 'black and orange',
        'height' : 'high',
        'release year' : '2015'
    },
    'unknown': {
        'color' : 'unknown',
        'height' : 'unknown',
        'release year' : 'unknown'
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:shoe',(req,res)=>{
    const shoe = req.params.shoe.toLowerCase()
    if(jordanShoes[shoe]){
        res.json(jordanShoes[shoe])
    }else{
        res.json(jordanShoes['unknown'])
    }
 
})
app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`)
})

