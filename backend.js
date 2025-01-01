
const express = require("express");

const app = express();


app.use(express.static("public"));

// Route for the home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/front.html");
});


app.get("/about", (req, res) => {
    res.json({
        title: "About Us",
        content: "The Robotics Club at VIT Chennai is a community of enthusiasts who love building, programming, and learning about robots."
    });
});


app.get("/events", (req, res) => {
    res.json([
        { name: "Hack-a-Bot", description: "A 24-hour hackathon where creativity meets robotics." },
        { name: "Robowar", description: "Battle your bots in an epic showdown of skill and strategy." },
        { name: "Workshop Series", description: "Hands-on sessions to learn and build robotic systems." }
    ]);
});


app.get("/contact", (req, res) => {
    res.json({
        email: "roboticsclub@vit.ac.in",
        address: "VIT Chennai, Tamil Nadu, India"
    });
});


app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
