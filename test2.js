const {
  range
} = require("rxjs");
const {
  map, 
  filter
} = require("rxjs/operators");

//Leaf Node + Chain Node + Root Node
range(1, 5)
.pipe(map(i => i * 2))
.pipe(filter(i => i % 4 === 0))
.subscribe(console.log, console.log, console.log);

