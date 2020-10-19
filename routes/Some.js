var express = require("express");
var router = express.Router();
const Some = require("../models/Some");

router.get("/", async (req, res, next) => {
  try {
    const apiRes = await Some.find({
      user: { $in: [req.session.currentUser] },
    });
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const apiRes = await Some.findById(req.params.id);
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newSome = req.body;
    const apiRes = await Some.create(newSome);
    res.status(201).json(apiRes);
  } catch (err) {
   // console.log(err);
    res.status(500).json(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updatedSome = req.body;
    const apiRes = await Some.findByIdAndUpdate(req.params.id, updatedSome, {
      new: true,
    });
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const apiRes = await Some.findByIdAndDelete(req.params.id);
    res.status(204).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
