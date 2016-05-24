'use strict';

const wikipedia = require('./services/wikipedia');
const math = require('./services/math');
const maconha = require('./services/odonto');
const risada = require('./services/risada');
const gmaps = require('./services/gmaps');
const mdn = require('./services/mdn');
const md5 = require('./services/md5');
const saudacao = require('./services/saudacao');

module.exports = {
  wikipedia: wikipedia,
  math: math,
  odonto: odonto,
  risada: risada,
  gmaps: gmaps,
  mdn: mdn,
  md5: md5,
  saudacao: saudacao
}