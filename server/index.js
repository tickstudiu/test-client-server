let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let songs = [{'id':0,'name':'pooh','price': 211},
   {'id':1, 'name':'vinnie','price': 111}
];

let index=2;

router.route('/songs')
   // get all songs
   .get( (req, res) =>  res.json({message: 'Get songs!', songs}) ) 

   // insert a new bear
   .post( (req, res)=> {
       var song = {};
       song.id =  index++;
       song.name = req.body.name
       song.price = req.body.price
       songs.push(song);
       res.json( {message: 'Song created!', songs} )
   })

router.route('/songs/:song_id')
   .get ( (req,res) => res.json(songs[req.params.song_id]))  // get a bear

   .put ( (req,res) => {                               // Update a bear
       var id = req.params.song_id
       songs[id].name = req.body.name;   
       songs[id].price = req.body.price;   
       res.json({ message: 'Song updated!' + req.params.song_id, songs});
   })

   .delete ( (req,res) => {
        songs.map((data, index) => {
            if(data.id == req.params.song_id){
                songs.splice(index, 1)
            }
        })
        res.json({ message: 'Song deleted: ' + req.params.song_id, songs});
   })


app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(8000,  () => console.log("Server is running") );