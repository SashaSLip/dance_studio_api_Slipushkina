import { prisma } from "../utils/prisma.js";

export const createBooking = async (userId, classId) => {
  const danceClass = await prisma.danceClass.findUnique({
    where: { id: classId },
    include: { bookings: true }
  });

  if (danceClass.bookings.length >= danceClass.capacity) {
    throw new Error("Class is full");
  }

  return prisma.booking.create({
    data: { userId, classId }
  });
};

export const getBookings = () => {
  return prisma.booking.findMany({
    include: { danceClass: true }
  });
};

export const deleteBooking = (id) => {
  return prisma.booking.delete({ where: { id } });
};