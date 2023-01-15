// npm - globa command, comes with node
// npm --version

// local dependency - use it only i this particular project 
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm intall -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip 
// npm init -y (everything default)

const { readFile} = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')