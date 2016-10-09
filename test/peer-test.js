'use strict';

const assert = require('assert');
const Peer = require(__dirname + '/../src/peer');

describe('peer', function(){
    describe('#constructor', function(){
        it('should throw an error if not supplied with an address', function() {
            assert.throws(
                () => {
                    let p = new Peer();
                },
                Error
            );
        });
        it('should throw an error if not supplied with a port', function() {
            assert.throws(
                () => {
                    let p = new Peer('127.0.0.1');
                },
                Error
            );
        });
    });

    describe('#address', function(){
        it('should return the value of _address', function() {
            let p = new Peer('127.0.0.1', 1234);
            p._address = 'temp-address';
            assert.equal(p.address(), 'temp-address');
        });
        it('should set the value of _address when supplied by it', function()
        {
            let p = new Peer('127.0.0.1', 1234);
            p.address('1234567');
            assert.equal(p.address(), '1234567');
        });
    });

    describe('#port', function(){
        it('should return the value of _port', function() {
            let p = new Peer('127.0.0.1', 1234);
            p._port = 0909;
            assert.equal(p.port(), 0909);
        });
        it('should set the value of _port when supplied by it', function()
        {
            let p = new Peer('127.0.0.1', 1234);
            p.port(12346);
            assert.equal(p.port(), 12346);
        });
    });
});
