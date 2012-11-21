# node-stat

node-stat provides monitoring of Linux statistics to applications based on node.js.

# Usage

## console

```shell
npm install -g node-stat
```

```shell
nodestat
nodestat -i 5
```

## module

```js
var nodestat = require('node-stat');
setInterval(function() {
	nodestat.get('stat','net','load', function(err, data) {
		console.log(data);
	};
}, 1000);
```

# License

MIT