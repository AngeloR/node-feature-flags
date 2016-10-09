# node-feature-flags
Provides a kademlia based mechanism to share feature flags on the server

## Installation
```
npm install --save node-feature-flags
```

## Usage
```js
const FeatureFlags = require('node-feature-flags');

const Peer = new FeatureFlags.Peer('127.0.0.1', 9002);
const manager = new FeatureFlags.Manager('127.0.0.1', 9000);

manager.on('error', (err) => {
    // error!
});

manager.on('system.dht.peer', () => {
    // new peer!
    manager.get('flagname', (err, value) => {
        // Get should be called after a peer is connected!
    });
});

manager.set('flagname', 'flagvalue', function() {
    // optional callback
    // you can set a value at any time!
})

```
