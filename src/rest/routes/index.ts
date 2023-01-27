import { Router } from "express";

const router = Router();
router.get("/", (_, res) => {
  res.json({ message: "Chat Application!" });
});

export default router;
