const {
  from
} = require("rxjs");
const {
  pluck
} = require("rxjs/operators");

const axios = require("axios");

// from(axios.head('https://api.github.com').then(res => Promise.resolve({data: res.data, headers: res.headers})))
// .pipe(
//     pluck('headers', 'x-ratelimit-remaining')
// ).subscribe(console.log, console.log, console.log);




// //this will give error as promise can't be serialized and sent over mesh so we didnot create actor for root node
// from(axios.get('https://api.github.com')).pipe( 
//     pluck('headers', 'x-ratelimit-remaining')
// ).subscribe(console.log, console.log, console.log); 