'use strict';

const flags = require(__dirname + '/../index');
const peer = new flags.Peer('127.0.0.1', 8011);
const flag = 'flag-1-state';

let manager = new flags.Manager('127.0.0.1', 8012);

manager.on('error', (err) => {
    console.log('error', err);
});

manager.on('system.dht.peer', () => {
    manager.get(flag, (err, val) => {
        if(err) {
            throw err;
        }

        console.log('node-b', 'get', flag, val)
    });
});

manager.connect(peer);
