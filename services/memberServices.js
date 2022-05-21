const Member = require("../models/memberModel");

// Get
const getAllMembers = () => {
  return new Promise((res, rej) => {
    Member.find({}, (err, members) => {
      if (err) {
        rej(err);
      } else {
        res(members);
      }
    });
  });
};

const getMemberById = (id) => {
  return new Promise((res, rej) => {
    Member.findById(id, (err, member) => {
      if (err) {
        rej(err);
      } else {
        res(member);
      }
    });
  });
};

// Post
const addMember = (newMember) => {
  return new Promise((res, rej) => {
    const member = new Member(newMember);
    member.save((err) => {
      if (err) {
        rej(err);
      } else {
        res("member added successfully");
      }
    });
  });
};

// Put
const updateMember = (id, changeMember) => {
  return new Promise((res, rej) => {
    Member.findByIdAndUpdate(
      id,
      changeMember,
      { runValidators: true },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res("member updated successfully");
        }
      }
    );
  });
};

// Delete
const deleteMember = (id) => {
  return new Promise((res, rej) => {
    Member.findByIdAndDelete(id, (err) => {
      if (err) {
        rej(err);
      } else {
        res("member deleted successfully");
      }
    });
  });
};

const deleteAllMembers = () => {
  return new Promise((res, rej) => {
    Member.deleteMany({}, (err) => {
      if (err) {
        rej(err);
      } else {
        res("all members deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
  deleteAllMembers,
};
