const router = require("express").Router();
const { Category, Product } = require("../../models");

// GET all categories
router.get("/", (req, res) => {
  Category.findAll({
    include: [{ model: Product }],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// GET one category
router.get("/:id", (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// POST new category
router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// UPDATE old category
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// DELETE category
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
