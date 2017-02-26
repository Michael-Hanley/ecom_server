var Images = require('../models/imageModel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    
    app.get('/api/Images/:uname', function(req,res) {

        Images.find({},
        function(err, Images){
            if (err) throw err;
            res.send(Images);
        });
    });

    app.get('api/Images/:id', function(req, res){
        Images.findById({ _id: req.params.id }, function(err, todo){
            if(err) throw err;

            res.send(todo);
        });
    });

    app.post('/api/Images', function(req, res){
         if(req.body.id){   
            Images.findByIdAndUpdate(req.body.id, {
            url: req.body.url, 
            location: req.body.location}, function(err, todo){
                if (err) throw err;
                
                res.send('Success~!');
            });
        }
        else {
            var newTodo = Images({
                username:'test',
                url: req.body.url,
                location: req.body.location
            });
            newTodo.save(function(err){
                if(err) throw err;
                res.send('Success');
            });
        }
    });
    app.delete('/api/Images', function(req, res){
        Images.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        })
    });
}