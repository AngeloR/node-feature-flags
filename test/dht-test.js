'use strict';

const DHT = require(__dirname + '/../src/dht');
const Peer = require(__dirname + '/../src/peer');
const assert = require('assert');

describe('DHT', function(){
    describe('#constructor', function(){
        it('should throw an error if not supplied with an address', function() {
            assert.throws(
                () => {
                    let p = new DHT();
                },
                Error
            );
        });
        it('should throw an error if not supplied with a port', function() {
            assert.throws(
                () => {
                    let p = new DHT('127.0.0.1');
                },
                Error
            )
        });
    });

    describe('#connect', function() {
        it('should emit a "system.dht.peer" event when connected to a peer');
        it('should emit an error message if it could not connect to a peer');
    });
});
