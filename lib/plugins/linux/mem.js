/*
 * plugin for memory statistics
 */

var labels = {
  MemTotal: 'total',
  MemFree: 'free',
  MemAvailable: 'available',
  Buffers: 'buffer',
  Cached: 'cached',
  SwapTotal: 'swaptotal',
  SwapFree: 'swapfree'
};

function mem() {
}

mem.prototype.get = function(nstat, callback) {

  var memory = {};
  nstat.lines(
    '/proc/meminfo', 
    function (line) {
      line = nstat.trim(line);
      var columns = nstat.split(line);
      var label = columns[0];
      if (label) {
        label = label.replace(/:$/,'');
        if (label in labels) {
          var name = labels[label];
          memory[name] = Number(columns[1]);
        }
      }
    },
    function (err) {
      if (err) {
        callback(err);
      } else {
        // if MemAvailable is not available fallback to the calculation method
        if (memory.available) {
          memory.used = memory.total - memory.available;
        } else {
          memory.used = memory.total - memory.free - memory.buffer - memory.cached;
        }
        callback(null, memory);
      }
    }
  );

};

module.exports = new mem();

