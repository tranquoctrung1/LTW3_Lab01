const CustomerModel = require("../models/customer.model");

module.exports.list = async (req, res) => {
  res.json(await CustomerModel.finnAll());
};

module.exports.details = async (req, res) => {
  const id = +req.params.id || 0;

  let customer = await CustomerModel.findById(id);

  console.log(customer);

  if (customer == null) {
    res.status(204).end();
  }

  res.json(customer);
};

module.exports.add = async (req, res) => {
  const payload = req.body;

  let result = await CustomerModel.add(payload);

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

  const id = payload.customer_id;
  delete payload.customer_id;

  let result = await CustomerModel.update(id, payload);

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

  let result = await CustomerModel.delete(id);

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
