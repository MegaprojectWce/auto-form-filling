const mongoose = require("mongoose");

var formSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  twelthPercentage: {
    type: String,
  },
  mhtCetPercentile: {
    type: String,
  },
  branchPreferance1: {
    type: String,
  },
  branchPreferance2: {
    type: String,
  },
  branchPreferance3: {
    type: String,
  },
});

mongoose.model("formData", formSchema); // (name of schema, schema Object)
// Employee -> should be in singular. In database it stores as 'employees' -> plural
