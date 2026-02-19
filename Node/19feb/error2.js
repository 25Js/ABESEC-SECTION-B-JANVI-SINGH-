const promise=reqire('promise');
const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
MongoClient.connect(url).then(function(arr,db){
    db.collection('Text').updateOne({name:'John'},{$set:{age:30}}).catch(error=>
        console.log('Error occurred:', error.message)
    );
});