const {
  range
} = require("rxjs");
const {
  map
} = require("rxjs/operators");

//Leaf Node + Root Node
range(1,5)
.pipe(map(i => i*2))
.subscribe(console.log, console.log, console.log);