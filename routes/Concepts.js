var express = require("express");
var router = express.Router();
const uploader = require("../config/cloudinary");
const Concept = require("../models/Concept");

router.get("/", async (req, res, next) => {
  try {
    const apiRes = await Concept.find();
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const apiRes = await Concept.findById(req.params.id);
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", uploader.single("image"), async (req, res, next) => {
  try {
    const newConcept = req.body;
    if (req.file) {
      newConcept.image = req.file.path;
    }
    const apiRes = await Concept.create(newConcept);
    res.status(201).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/:id", uploader.single("image"), async (req, res, next) => {
  try {
    console.log();
    const updatedConcept = req.body;
    if (req.file) {
      updatedConcept.image = req.file.path;
    }
    const apiRes = await Concept.findByIdAndUpdate(
      req.params.id,
      updatedConcept,
      {
        new: true,
      }
    );
    res.status(200).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const apiRes = await Concept.findByIdAndDelete(req.params.id);
    res.status(204).json(apiRes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
