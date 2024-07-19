var express = require('express');
var router = express.Router();
var db = require('../models');
const { Sequelize, Op } = require('sequelize');

const {Cliente, Servicio, ServicioXCliente} =db;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Clientes
router.get('/clientes/json', function(req, res, next) {
  Cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(cliente => {
    res.json(cliente);
  })
  .catch(error => res.status(400).send(error))
});

router.get('/clientes', function(req, res, next) {
  Cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(cliente => {
    res.render('clientes', { title: 'Clientes', arrClientes: cliente });
  })
  .catch(error => res.status(400).send(error))
});


router.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id, {
      include: {
        model: Servicio,
        through: { attributes: [] },
        as: 'servicios'
      }
    });
    res.json(cliente);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
