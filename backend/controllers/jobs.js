const router = require("express").Router();
const Job = require("../models/job");

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/:id", async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res) => {
  const content = req.body;
  if (content === undefined) {
    res.status(400).json({ error: "content is missing" });
  }

  const job = new Job({
    ...content,
  });
  const savedJob = await job.save();
  res.status(200).json(savedJob);
});

module.exports = router;
