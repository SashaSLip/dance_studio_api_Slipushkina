import * as service from "../services/booking.service.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await service.createBooking(
      req.user.id,
      req.body.classId
    );
    res.json(booking);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const getBookings = async (req, res) => {
  res.json(await service.getBookings());
};

export const deleteBooking = async (req, res) => {
  await service.deleteBooking(req.params.id);
  res.json({ message: "Cancelled" });
};