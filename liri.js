


var fs = require('fs');


var authentication = require('./keys.js');
var request = require('request');
//var spotify = require('spotify');
var twitter = require('twitter');
var user = new twitter(authentication);


var twitter_app = {
  "my-tweets": function() { 
    user.get('statuses/user_timeline', function(error, tweetData, response) {
      if (!error) {
        console.log(' ');
        console.log('User_Tweets');
        tweetData.forEach(function(obj) {
          console.log('');
          console.log('Tweets: ' + obj.text);
          console.log('Timestamp: ' + obj.created_at);
          console.log(' ');
          console.log(' ');
        });
        console.log(' ');
        console.log(' ');
        app.logData(tweetData);
      } else {
        console.log(error);
      }
    });
  }
}



var spotify_app = {
 ""
}



app[process.argv[2]](process.argv[3]);



