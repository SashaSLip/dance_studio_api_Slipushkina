import * as service from "../services/class.service.js";

export const createClass = async (req, res) => {
  res.json(await service.createClass(req.body));
};

export const getClasses = async (req, res) => {
  res.json(await service.getClasses(req.query));
};

export const getClassById = async (req, res) => {
  res.json(await service.getClassById(req.params.id));
};

export const updateClass = async (req, res) => {
  res.json(await service.updateClass(req.params.id, req.body));
};

export const deleteClass = async (req, res) => {
  await service.deleteClass(req.params.id);
  res.json({ message: "Deleted" });
};