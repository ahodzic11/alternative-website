require("dotenv").config();
var cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const userRouter = require("./api/users/userRouter");
const workshopRouter = require("./api/workshops/workshopRouter");
const ativitiesRouter = require("./api/activities/activityRouter");
const newsRouter = require("./api/news/newsRouter");
const projectsRouter = require("./api/projects/projectRouter");
const fs = require("fs");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/workshops", workshopRouter);
app.use("/api/activities", ativitiesRouter);
app.use("/api/news", newsRouter);
app.use("/api/projects", projectsRouter);

app.get("/:naslov", async (req, res) => {
  const naslov = req.params.naslov;
  const testFolder = "https://www.nvo-alternative.org/images/radionice/" + naslov + "/";
  const testFolder2 = "./../uploads/radionice/Prezentacijskevještine";
  const testFolder3 = "https://www.nvo-alternative.org/images/radionice/Prezentacijskevještine/";
  try {
    const slike = fs.readdirSync(testFolder2);
    console.log(slike);
    res.json(slike);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server up and running on port", 5000);
});

/*
5000, () => {
  console.log("Server up and running on port", 5000);
}*/