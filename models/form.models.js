const mongoose = require('mongoose')

var formSchema = new mongoose.Schema({
    name: {
        type: String,
    //    required:true
    },
    branch: {
        type: String
    },
    fatherName: {
        type: String
    },
    motherName: {
        type: String
    },
    gender: {
        type: String
    },
    academics: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    pinCode: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    mobile: {
        type: String
    },
    

}); 

mongoose.model('formData',formSchema);  // (name of schema, schema Object)
// Employee -> should be in singular. In database it stores as 'employees' -> plural