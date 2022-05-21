const express = require("express");
const memberServices = require("../services/memberServices");

const router = express.Router();

// Get all members
router.route("/").get(async (req, res) => {
  const members = await memberServices.getAllMembers();
  return res.json(members);
});

// Get member by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const member = await memberServices.getMemberById(id);
  return res.json(member);
});

// Post
router.route("/").post(async (req, res) => {
  const newMember = req.body;
  try {
    const data = await memberServices.addMember(newMember);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeMember = req.body;
  try {
    const data = await memberServices.updateMember(id, changeMember);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await memberServices.deleteMember(id);
  return res.json(data);
});

module.exports = router;
