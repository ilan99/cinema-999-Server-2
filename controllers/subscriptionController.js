const express = require("express");
const subscriptionServices = require("../services/subscriptionServices");

const router = express.Router();

// Get all subscriptions
router.route("/").get(async (req, res) => {
  const subscriptions = await subscriptionServices.getAllSubscriptions();
  return res.json(subscriptions);
});

router.route("/ref/").get(async (req, res) => {
  const subscriptions = await subscriptionServices.getAllSubscriptionsByRef();
  return res.json(subscriptions);
});

// Get subscription by Id
router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const subscription = await subscriptionServices.getSubscriptionById(id);
  return res.json(subscription);
});

// Post
router.route("/").post(async (req, res) => {
  const newSubscription = req.body;
  try {
    const data = await subscriptionServices.addSubscription(newSubscription);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Put
router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const changeSubscription = req.body;
  try {
    const data = await subscriptionServices.updateSubscription(
      id,
      changeSubscription
    );
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
});

// Delete
router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const data = await subscriptionServices.deleteSubscription(id);
  return res.json(data);
});

module.exports = router;
