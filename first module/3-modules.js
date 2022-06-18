// Modules - Encapsulated Code (share minimum)
// CommonJS, every file is a module
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)