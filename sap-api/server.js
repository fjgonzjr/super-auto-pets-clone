const express = require('express')
const app = express()
const PORT = 8000

// array of pets
const pets = {
    fish: {
        attack: 2,
        health: 2
    },
    beaver: {
        attack: 3,
        health: 2
    },
    ant: {
        attack: 2,
        health: 1
    }
}

// if main page is requested, show main index.html page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// if query parameter '/pets' is requested, show json for all pets
app.get('/pets', (req, res) => {
    res.json(pets)
})

// if query parameter '/pets' is requested, with an additional query for a SPECIFIC pet, show json for that specific pet
app.get('/pets/:petName', (req,res) => {
    const userChosenPet = req.params.petName.toLowerCase()
    if(pets[userChosenPet]){
        res.json(pets[userChosenPet])
    }else{
        res.json('Sorry the pet you requested does not exist.')
    }
})

// set up server to be listening on port 8000, i.e. 'localhost:8000/'
app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}.`)
})