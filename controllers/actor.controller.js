const ActorModel = require("../models/actor.model");

module.exports.list = async (req, res) => {
  res.json(await ActorModel.finnAll());
};

module.exports.details = async (req, res) => {
  const id = +req.params.id || 0;

  let actor = await ActorModel.findById(id);

  console.log(actor);

  if (actor == null) {
    res.status(204).end();
  }

  res.json(actor);
};

module.exports.add = async (req, res) => {
  const payload = req.body;

  let result = await ActorModel.add(payload);

  if (result == null || result == undefined) {
    res.status(201).json({
      message: "Insert Fail",
    });
  }
  res.status(200).json({
    message: "Insert Success",
  });
};

module.exports.update = async (req, res) => {
  const payload = req.body;

  const id = payload.actor_id;
  delete payload.actor_id;

  let result = await ActorModel.update(id, payload);

  if (result == 0) {
    res.status(201).json({
      message: "Update Fail",
    });
  }
  res.status(200).json({
    message: "Update Success",
  });
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;

  let result = await ActorModel.delete(id);

  console.log(result);

  if (result == 0) {
    res.status(201).json({
      message: "Delete Fail",
    });
  }
  res.status(200).json({
    message: "Delete Success",
  });
};
