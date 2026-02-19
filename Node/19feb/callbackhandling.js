const fs=require('fs');
fs.readFile('input.txt', function(err,data){
    if(err){
      console.log(err);
    }
});
fs.readFile('mytex.txt',function(err,data){
    if(err){
        console.log(err);

    }
    else{
        console.log(data.toString());
    }
});

// Another example for callback error handling
function readAndProcess(filename, callback){
    fs.readFile(filename, 'utf8', function(err, data){
        if(err){
            callback(err, null);
        }
        else{
            try{
                let processed = data.toUpperCase();
                callback(null, processed);
            }
            catch(error){
                callback(error, null);
            }
        }
    });
}

readAndProcess('input.txt', function(err, result){
    if(err){
        console.log('Error occurred:', err.message);
    }
    else{
        console.log('Processed data:', result);
    }
});

