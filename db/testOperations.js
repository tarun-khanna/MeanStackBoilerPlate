var testCollection = require("./testSchema");

var testOperations = {
  storetest: function(response) {
    console.log("inside save");
    response.end();
    /* let testToSave = new testCollection(testData);
    testToSave.save((err, doc) => {
      if (err) console.log(`Error while signing up user`, err.stack);
      else {
        console.log(`Saved test.. :-)`, doc);
      }
    }); */
  },
  gettest: function(response, next) {
    console.log("inside get");
    //next();
    response.end();
    /*  let testList = testCollection.find({}, (err, doc) => {
      if (err) {
        next();
      } else {
        response.send({ data: doc });
      }
    });
 */
  },
  updatetest: function(response) {
    console.log("inside update");
    response.end();
    /* testCollection.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      testCollection.findOne({ _id: req.params.id }).then(function(ninja) {
        res.send(ninja);
      });
    })
    .catch(next); */
  },
  deleteTest: function(response) {
    console.log("inside delete");
    response.end();
    /*     Ninja.findByIdAndRemove({ _id: req.params.id })
    .then(function(ninja) {
      res.send(ninja);
    })
    .catch(next); */
  }
};

module.exports = testOperations;
