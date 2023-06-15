const { john, frank } = require("./names");

const sayHi = require("./utils");

const data = require("./alternativeflavor");

// sayHi(john);
// sayHi(frank);
// console.log(data);

//note : whenever we require a file, node finds it and executes it
require("./mindgrenade");
