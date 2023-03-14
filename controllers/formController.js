const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const FormData = mongoose.model('formData');

router.get('/', (req, res) => {
    res.render("form/addOrEdit", {
        viewTitle: "Insert Record"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '') {
        // FormData.findOne()
        //     .then(data => {
        //         console.log(data);
        //         if (data == undefined || data == null) {
        //             insertRecord(req, res);
        //         } else {
        //             res.send("<script>alert('error');window.location.href='\'</script>");
        //         }
        //     }).catch(err => {
        //         console.log("Error in database");
        //     })
        insertRecord(req, res);
    }
     else {
        console.log("req.body._id: "+req.body._id)
        updateRecord(req, res);
    }

    // if (req.body._id == '')
    //     insertRecord(req, res);
    // else
    //     updateRecord(req, res);
});


function insertRecord(req, res) {
    var data = new FormData();
    data.name = req.body.name;
    data.branch = req.body.branch;
    data.fatherName = req.body.fatherName;
    data.motherName = req.body.motherName;
    data.gender = req.body.gender;
    data.acadmic = req.body.acadmic;
    data.address = req.body.address;
    data.city = req.body.city;
    data.pinCode = req.body.pinCode;
    data.state = req.body.state;
    data.country = req.body.country;
    data.mobile = req.body.mobile;
    data.save()
        .then(data => {
            // console.log(data);
            res.redirect('/');
        }).catch(err => {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("form/addOrEdit", {
                    viewTitle: "Insert Employee",
                    data: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
        );
}

function updateRecord(req, res) {
    FormData.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("form/addOrEdit", {
                    viewTitle: 'Insert Record',
                    employee: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    FormData.find((err, docs) => {
        if (!err) {
            res.render("form/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    }).lean();
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    FormData.findById(req.params.id, (err, doc) => {
        // console.log(doc.city);
        if (!err) {
            res.render("form/addOrEdit", {
                viewTitle: "Update Employee",
                employee: doc
            });
        }
    }).lean();
});

router.get('/delete/:id', (req, res) => {
    FormData.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/list');
        }
        else { console.log('Error in employee delete :' + err); }
    }).lean();
});

module.exports = router;