import { Router } from "express";
import nellowController from "../controllers/nellow";

const RootRouter = Router();

RootRouter.get("/", (req, res) => {
  res.json({
    text: "Hello world"
  })
})

RootRouter.route('/user')
  .get((req, res) => {
    return res.json({
      text: "user get"
    })
  })

RootRouter.get('/nellow/create', (req, res) => {
  nellowController.get(req, res)
})

RootRouter.get('/nellow/connect/:nellowId', (req, res) => {
  nellowController.connect(req, res)
})


export default RootRouter;