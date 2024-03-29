import { Request, Response, Router } from "express";

import { create, deleteOne, update } from "./controller";

const router = Router();

router.post("", async (req: Request, res: Response) => {
  return res.status(200).json(await create(req.body.budgetId, req.body.budgetItem));
});

router.put("", async (req: Request, res: Response) => {
  return res.status(200).json(await update(req.body.id, req.body));
});

router.delete("", async (req: Request, res: Response) => {
  return res.status(200).json(await deleteOne(req.body.id));
});

export default router;
