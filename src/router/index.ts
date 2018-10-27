import { Router } from "express";

const RootRouter = Router();

RootRouter.get("/", (req, res) => {
  res.render("index", {
    text: "Hello world"
  })
})

export default RootRouter;