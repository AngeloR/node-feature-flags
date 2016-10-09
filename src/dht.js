'use strict';

const Kad = require('kad');
const util = require('util');
const EventEmitter = require('events').EventEmitter;

/**
 * Create a new instance of the DHT, bound to the address/port specified. 
 *
 * The DHT instance will live in isolation and will not connect to any remote
 * peers. It will connect to a "memory" only storage system that will allow key
 * states to exist in memory
 *
 * @param address string
 * @param port number
 */
function DHT(address, port) {
    let contact = Kad.contacts.AddressPortContact({
        address: address,
        port: port
    });

    this.dht = new Kad.Node({
        transport: Kad.transports.UDP(contact),
        storage: Kad.storage.MemStore()
    });
}

util.inherits(DHT, EventEmitter);

/**
 * Connect to a DHT peer
 *
 * @param peer Peer 
 * @event error(Error)
 * @event system.dht.connected
 */
DHT.prototype.connect = function(peer) {
    this.dht.on('error', (err) => {
        this.emit('system.dht.error', err);
    });

    this.dht.on('join', () => {
        this.emit('system.dht.peer');
    });

    this.dht.connect({
        address: peer.address(),
        port: peer.port()
    });
}

/**
 * Get the current value of a key
 *
 * @param key string
 * @param cb function
 */
DHT.prototype.get = function(key, cb) {
    this.dht.get(key, cb);
}

/**
 * Set the value of a key
 *
 * @param key string
 * @param value any
 * @param cb function
 */
DHT.prototype.set = function(key, value, cb) {
    this.dht.put(key, value, cb); 
}

module.exports = DHT;
