const mongoose = require('mongoose')


// console.log(process.env.USER_NAME);
// console.log(process.env.PASS_WORD);

mongoose.connect('mongodb+srv://manojmetgud035:sem8Mega@cluster0.oykyxlh.mongodb.net/dataDB', {useNewUrlParser:true} , (err)=>{

    if(!err){console.log('MongoDB Connection Succeeded');}
    else {console.log('Error in DB Connection: '+ err);}

});
// mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser:true} , (err)=>{

//     if(!err){console.log('MongoDB Connection Succeeded');}
//     else {console.log('Error in DB Connection: '+ err);}

// });

require('./form.models');


// mongodb+srv://manojmetgud035:<password>@cluster0.oykyxlh.mongodb.net/?retryWrites=true&w=majority