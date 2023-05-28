const express = require("express");
const PDFDocument = require("pdfkit");
var router = express.Router();
const mongoose = require("mongoose");
const FormData = mongoose.model("formData");

router.get("/", (req, res) => {
  res.render("form/addOrEdit", {
    viewTitle: "Admission Form",
  });
});

router.post("/", (req, res) => {
  insertRecord(req, res);
});

function insertRecord(req, res) {
  var data = new FormData(req.body);
  console.log(req.body);

  // data.name = req.body.name;
  // data.email = req.body.email;
  // data.mobile = req.body.mobile;
  // data.gender = req.body.gender;
  // data.birthDate = req.body.birthdate;
  // data.address = req.body.address;
  // data.city = req.body.city;
  // data.pinCode = req.body.pinCode;
  // data.state = req.body.state;
  // data.country = req.body.country;
  // data.twelthPercentage = req.body.twelthPercentage;
  // data.mhtCetPercentile = req.body.mhtCetPercentile;
  // data.branchPreferance1 = req.body.branchPreferance1;
  // data.branchPreferance2 = req.body.branchPreferance2;
  // data.branchPreferance3 = req.body.branchPreferance3;

  data
    .save()
    .then((data) => {
      console.log(data);
      // res.redirect('/');
      res.render("form/success");
    })
    .catch((err) => {
      if (err.name == "ValidationError") {
        handleValidationError(err, req.body);
        res.render("form/addOrEdit", {
          viewTitle: "Admission Form",
          data: req.body,
        });
      } else console.log("Error during record insertion : " + err);
    });
}

function updateRecord(req, res) {
  FormData.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("/list");
      } else {
        if (err.name == "ValidationError") {
          handleValidationError(err, req.body);
          res.render("form/addOrEdit", {
            viewTitle: "Admission Form",
            employee: req.body,
          });
        } else console.log("Error during record update : " + err);
      }
    }
  );
}

router.get("/list", (req, res) => {
  FormData.find((err, docs) => {
    if (!err) {
        docs.forEach((doc, index) => {
            docs[index].SerialNumber = index + 1;
          });
          
      res.render("form/list", {
        list: docs,
      });
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  }).lean();
});

function handleValidationError(err, body) {
  for (field in err.errors) {
    switch (err.errors[field].path) {
      case "fullName":
        body["fullNameError"] = err.errors[field].message;
        break;
      case "email":
        body["emailError"] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get("/:id", (req, res) => {
  FormData.findById(req.params.id, (err, data) => {
    console.log("data", data);
    if (!err) {
      res.render("form/pdf", {
        data: data,
      });
    }
  }).lean();
});

router.get("/delete/:id", (req, res) => {
  FormData.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/list");
    } else {
      console.log("Error in employee delete :" + err);
    }
  }).lean();
});

module.exports = router;
