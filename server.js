const express = require('express')
const app = express()
const path = require('path')
const PORT = 8000

const animeCharacter = {
    'naruto': {
        'age': 33,
        'power': 'Ninjutsu, and Tailed-Beast Chakra',
        'series': 'Naruto'
    },
    'monkey D. Luffy':{
        'age': 19,
        'power': 'Devil Fruit: Gum Gum',
        'series': 'One Piece' 
    },
    'vanitas':{
        'age': 18,
        'power': 'Blue Moon Vampire Clan Blood',
        'series': 'The Case Study of Vanitas'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/html/index.html'))
})

app.get('/js/main.js',function(req,res){
    res.sendFile(path.join(__dirname + 'public/js/main.js')); 
});

app.get('/api/:name',(request,response)=>{
    const characterName = request.params.name.toLowerCase()

    if( animeCharacter[characterName] ){
        response.json(animeCharacter[characterName])
    }else{
        response.json(animeCharacter['unknown'])
    }
    
})

app.listen(PORT)