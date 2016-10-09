'use strict';

const DHT = require(__dirname + '/src/dht');
const Peer = require(__dirname + '/src/peer');

exports.Peer = Peer;
exports.Manager = DHT;
