const {
    range
} = require("rxjs");

//Lone Wolf
range(1, 5).subscribe(console.log, console.log, console.log);
