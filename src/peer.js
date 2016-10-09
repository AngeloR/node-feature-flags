'use strict';

function Peer(address, port) {
    if(!address) {
        throw new Error('Invalid peer address');
    }
    if(!port) {
        throw new Error('Invalid peer port');
    }

    this.address(address);
    this.port(port);
}

Peer.prototype.address = function(address) {
    if(address) {
        this._address = address.toString();
    }

    return this._address;
}

Peer.prototype.port = function(port) {
    if(!isNaN(port)) {
        this._port = parseInt(port, 10);
    }

    return this._port;
}

module.exports = Peer;
