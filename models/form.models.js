const mongoose = require("mongoose");

var formSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  fathername: {
    type: String,
  },
  mothername: {
    type: String,
  },
  minority: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  nationality: {
    type: String,
  },
  maritalstatus: {
    type: String,
  },
  community: {
    type: String,
  },
  address: {
    type: String,
  },
  education: {
    type: String,
  },
  graduation: {
    type: String,
  },
  graduationpercentage: {
    type: String,
  },
  examination: {
    type: String,
  },
  attempts: {
    type: String,
  },
  onetofive: {
    type: String,
  },
  sixandseven: {
    type: String,
  },
  apradesh: {
    type: String,
  },
});

mongoose.model("formData", formSchema); // (name of schema, schema Object)
// Employee -> should be in singular. In database it stores as 'employees' -> plural
