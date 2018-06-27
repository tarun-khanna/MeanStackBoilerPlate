const express = require("express");
const router = express.Router();
const testOperations = require("./db/testOperations");

router.get("/test", function(req, res, next) {
  testOperations.gettest(res, next);
});

router.post("/test", function(req, res, next) {
  testOperations.storetest(res);
});

router.put("/test/:id", function(req, res, next) {
  testOperations.updatetest(res);
});

router.delete("/test/:id", function(req, res, next) {
  testOperations.deletetest(res);
});

module.exports = router;
