const connection = require("./connection");

var Schema = connection.Schema;

var testSchema = new Schema({
  name: String,
  phone: Number,
  text: String,
  timeStamp: Date
});
var testModel = connection.model("testCollection", testSchema);

module.exports = testModel;
