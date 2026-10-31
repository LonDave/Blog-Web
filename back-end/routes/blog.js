import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
    res.render("blogPage.ejs");
});

// ? rotte annidate per gli elementi in evidenza

router.get("/ev1", (req, res) => {
    res.render("ev1.ejs");
});

router.get("/ev2", (req, res) => {
    res.render("ev2.ejs");
});

router.get("/ev3", (req, res) => {
    res.render("ev3.ejs");
});