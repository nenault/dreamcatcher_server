var express = require("express");
var router = express.Router();
const Dream = require("../models/Dream");
const Concept = require("../models/Concept");

router.get("/", async (req, res, next) => {
  try {
    const apiRes = await Dream.find({
      user: { $in: [req.session.currentUser] },
    });
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const apiRes = await Dream.findById(req.params.id);
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newDream = req.body;
    const apiRes = await Dream.create(newDream);
    res.status(201).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updatedDream = req.body;
    const apiRes = await Dream.findByIdAndUpdate(req.params.id, updatedDream, {
      new: true,
    });
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const apiRes = await Dream.findByIdAndDelete(req.params.id);
    res.status(204).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
