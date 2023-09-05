const express = require('express');
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get("/",async(req, res) => {
    const allUser = await prisma.dishes.findMany();
    res.json(allUser);
})

router.get("/:id",async(req, res) => {
    const user = await prisma.dishes.findFirst({where: {id: req.params.id}});
    res.json(user);
})

router.post("/many",async(req, res) => {
    const newUser = await prisma.dishes.createMany({data: req.body});
    res.json(newUser);
})

router.post("/",async(req, res) => {
    const newUser = await prisma.dishes.create({data: req.body});
    res.json(newUser);
})

module.exports = router;