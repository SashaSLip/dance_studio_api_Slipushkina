import { prisma } from "../utils/prisma.js";

export const createClass = (data) => {
  return prisma.danceClass.create({ data });
};

export const getClasses = (filters) => {
  return prisma.danceClass.findMany({
    where: {
      level: filters.level,
      date: filters.date ? { gte: new Date(filters.date) } : undefined
    }
  });
};

export const getClassById = (id) => {
  return prisma.danceClass.findUnique({ where: { id } });
};

export const updateClass = (id, data) => {
  return prisma.danceClass.update({
    where: { id },
    data
  });
};

export const deleteClass = (id) => {
  return prisma.danceClass.delete({ where: { id } });
};