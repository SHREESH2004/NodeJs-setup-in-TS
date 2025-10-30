import { Router, Request, Response, NextFunction } from "express";
import { getMainController } from "../controller/main.controller.js";
import { body, validationResult } from "express-validator";

const router = Router();

router.post(
  "/add",
  [
    body("username")
      .isString()
      .withMessage("Username must be a string")
      .notEmpty()
      .withMessage("Username is required")
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); 
  },
  getMainController
);

export default router;
