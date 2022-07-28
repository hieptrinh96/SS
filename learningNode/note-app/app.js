const chalk = require('chalk')
const yargs = require('yargs');
const getNotes = require('./notes');

// yargs.version('1.1.0')

// create add command
yargs.command = ({
    command: 'add',
    describe:'Add a new note',
    handler: function() {
        console.log('Adding a new note')
    },
})
// add, remove, read, list 

console.log(yargs.argv)