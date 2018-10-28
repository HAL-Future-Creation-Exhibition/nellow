import { Router } from "express";
import nellowController from "../controllers/nellow";
import userController from "../controllers/user";

const RootRouter = Router();

RootRouter.get("/", (req, res) => {
  res.json({
    text: "Hello world"
  })
})

RootRouter.route('/user/:userId')
  .get((req, res) => {
    userController.get(req, res)
  })
  .post((req, res) => {
    userController.update(req, res)
  })

RootRouter.get('/create', (req, res) => {
  nellowController.create(req, res)
})

export default RootRouter;