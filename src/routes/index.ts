import { Router } from "express";
import talksRouter from "./Talks.routes";
import usersRouter from "./Users.routes";
import cors from  'cors';

const router = Router();
router.use(cors({allowedHeaders:'GET, POST, OPTIONS, PUT, PATCH, DELETE',origin:'http://localhost:4200'}));

router.use("/users", usersRouter);
router.use("/talks", talksRouter);

export default router;
