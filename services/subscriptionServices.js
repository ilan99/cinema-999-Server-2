const Subscription = require("../models/subscriptionModel");

// Get
const getAllSubscriptions = () => {
  return new Promise((res, rej) => {
    Subscription.find({}, (err, subscriptions) => {
      if (err) {
        rej(err);
      } else {
        res(subscriptions);
      }
    });
  });
};

const getAllSubscriptionsByRef = () => {
  return new Promise((res, rej) => {
    Subscription.find()
      .populate("memberId")
      .populate("movies.movieId")
      .exec((err, subscriptions) => {
        if (err) {
          rej(err);
        } else {
          res(subscriptions);
        }
      });
  });
};

const getSubscriptionById = (id) => {
  return new Promise((res, rej) => {
    Subscription.findById(id, (err, subscription) => {
      if (err) {
        rej(err);
      } else {
        res(subscription);
      }
    });
  });
};

// Post
const addSubscription = (newSubscription) => {
  return new Promise((res, rej) => {
    const subscription = new Subscription(newSubscription);
    subscription.save((err, doc) => {
      if (err) {
        rej(err);
      } else {
        res(doc);
      }
    });
  });
};

// Put
const updateSubscription = (id, changeSubscription) => {
  return new Promise((res, rej) => {
    Subscription.findByIdAndUpdate(
      id,
      changeSubscription,
      { runValidators: true },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res("subscription updated successfully");
        }
      }
    );
  });
};

// Delete
const deleteSubscription = (id) => {
  return new Promise((res, rej) => {
    Subscription.findByIdAndDelete(id, (err) => {
      if (err) {
        rej(err);
      } else {
        res("subscription deleted successfully");
      }
    });
  });
};

const deleteAllSubscriptions = () => {
  return new Promise((res, rej) => {
    Subscription.deleteMany({}, (err) => {
      if (err) {
        rej(err);
      } else {
        res("all subscriptions deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllSubscriptions,
  getAllSubscriptionsByRef,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
  deleteAllSubscriptions,
};
