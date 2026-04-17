import { Router } from "express";
import * as ctrl from "../controllers/booking.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, ctrl.createBooking);
router.get("/", authMiddleware, ctrl.getBookings);
router.delete("/:id", authMiddleware, ctrl.deleteBooking);

export default router;