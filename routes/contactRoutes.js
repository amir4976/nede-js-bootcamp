const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  postContact,
  putContact,
  DeleteContact,
} = require("../controllers/ContactControllers");

// create our routes
// reference to ../controllers/ContactControllers.jsx
// there we create that function and here use them and make it routs see that is so easy😊

// no ids requested
router.route("/").get(getContacts).post(postContact);

// ids requested
router.route("/:id").get(getContact).put(putContact).delete(DeleteContact);

// and then export them
module.exports = router;
