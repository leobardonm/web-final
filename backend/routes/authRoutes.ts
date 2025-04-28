import { Router } from "express";
import { loginHandler } from "../handlers/authHandler";

const authRouter = Router();

authRouter.post("/login", loginHandler);

export default authRouter;
