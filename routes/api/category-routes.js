const router = require("express").Router();
const { model } = require("mongoose");
const { UPSERT } = require("sequelize/types/lib/query-types");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    // includes all from product as well as category
    include: [{ model: Product }],
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  });
});

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  UPSERT.destroy({
    where: {
      id: req.params.id,
    },
  });
});

module.exports = router;
