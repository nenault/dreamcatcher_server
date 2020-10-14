var express = require("express");
var router = express.Router();
const uploader = require("../config/cloudinary");
const Dream = require("../models/Dream");

router.get("/", async (req, res, next) => {
  try {
    const apiRes = await Dream.find();
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

router.post("/", uploader.single("image"), async (req, res, next) => {
  try {
    const newDream = req.body;
    if (req.file) {
      newDream.image = req.file.path;
    }
    const apiRes = await Dream.create(newDream);
    res.status(201).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/:id", uploader.single("image"), async (req, res, next) => {
  try {
    const updatedDream = req.body;
    if (req.file) {
      updatedDream.image = req.file.path;
    }
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
