const express = require("express");
const router = express.Router();


const { uploadVideo, getVideos } = require("../controllers/videoController");



//---------User Api's----------//
router.post("/upload", uploadVideo);

router.get("/getVideos", getVideos)



module.exports = router