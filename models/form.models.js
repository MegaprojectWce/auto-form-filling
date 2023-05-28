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
  degreesubjectingraduation: {
    type: String,
  },
  graduationpercentage: {
    type: String,
  },
  examinationyouliketobeconsidered: {
    type: String,
  },
  numberofattempts: {
    type: String,
  },
  languagemediumforexaminationforpaper1topaper5: {
    type: String,
  },
  languagemediumforexaminationforpaper6andpaper7: {
    type: String,
  },
  doyouhailfromArunachalPradeshManipur: {
    type: String,
  },
});

mongoose.model("formData", formSchema); // (name of schema, schema Object)
// Employee -> should be in singular. In database it stores as 'employees' -> plural
