'use strict';

const flags = require(__dirname + '/../index');
const peer = new flags.Peer('127.0.0.1', 8011);
const flag = 'flag-1-state';
const flag_value = 'a-new-value';


let manager = new flags.Manager('127.0.0.1', 8011);

manager.on('error', (err) => {
    console.log('error', err);
});

manager.on('system.dht.peer', () => {
    console.log('Connected to peer');
});

manager.connect(peer);

manager.set(flag, flag_value, () => {
    console.log('node-a', 'set', flag, flag_value);
});
