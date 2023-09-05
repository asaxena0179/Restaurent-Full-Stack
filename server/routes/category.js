const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { name, prices, asc } = req.query;
  console.log(name, prices);
  const user = await prisma.dishes.findMany({
    where: {dish_name: name,dish_prices: prices},
  });
  res.json(user);
});

module.exports = router;
