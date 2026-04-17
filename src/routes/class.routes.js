import { Router } from "express";
import * as ctrl from "../controllers/class.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/role.middleware.js";

const router = Router();

router.get("/", ctrl.getClasses);
router.get("/:id", ctrl.getClassById);

router.post("/", authMiddleware, roleMiddleware("ADMIN"), ctrl.createClass);
router.put("/:id", authMiddleware, roleMiddleware("ADMIN"), ctrl.updateClass);
router.delete("/:id", authMiddleware, roleMiddleware("ADMIN"), ctrl.deleteClass);

export default router;