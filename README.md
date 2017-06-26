# node-stat

node-stat provides resources monitoring for Linux and Windows.


This is an extended version of [Suguru Namura node-stat library](https://github.com/suguru/node-stat).
This version of the library is being used every day in our own [client](https://github.com/interactar/theeye-agent), which is also in constant development.


We didn't have the opportunity to use this library in every Windows/Linux platform.
We know it doesn't work on every Windows/Linux, but we are planning to make it work.
So far this is working on

> Ubuntu 64      
> Ubuntu 32           
> Windows 2013 Server.       

If you found a bug or issue or need an upgrade, please feel free to open an issue, it will help us improve.
We also are open to discuss any further feature or improvement, and collaboration is welcome.

# Usage


The use is the same as with the original library. 

## Use on console


```shell
npm install -g theeye-node-stat
```

```shell
nodestat
nodestat -i 5
```

## Use as module

```js
var nodestat = require('node-stat');
setInterval(function() {
    nodestat.get('stat','net','load','disk', function(err, data) {
        console.log(JSON.stringify(data));
    });
}, 1000);
```

# License

MIT
