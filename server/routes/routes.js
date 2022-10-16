const express =require("express");
const router = express.Router();
const API= require("../controllers/api.js");

router.get("/", API.fetchAllEvents);
router.get("/:id", API.fetchEventbyid);
router.post("/", API.createEvents);
router.patch("/:id", API.updateEvents);
router.delete("/:id", API.deleteEvents);

module.exports= router;
