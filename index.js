#!/usr/bin/env node

const { GlobalKeyboardListener } = require('node-global-key-listener');
const readline = require('node:readline')
const eventEmmitter = require('node:events');

const ee = new eventEmmitter()
const v = new GlobalKeyboardListener();
const { Readable } = require('node:stream');

// const inStream = new Readable({
//   read() { console.log('in reading'); }
// });

// let i = 0
// setInterval(() => { inStream.push(`${i++}`) }, 1000)
// readline.emitKeypressEvents(inStream);

// inStream.on('keypress', event => {
//   console.log(event)
// });
const listener = () => console.log('Events are fun');
ee.on('foo', listener);

// v.addListener(function (e, down) {
//   console.log(
//     `${e.name} ${e.state == "DOWN" ? "DOWN" : "UP  "} [${e.rawKey._nameRaw}]`
//   );
// });

// readline.emitKeypressEvents(process.stdin);

// process.stdin.on('keypress', (ch, key) => {
//   console.log('got "keypress"', ch, key);
//   if (key & key.cmd && key.name == 'c') {
//     console.log('Just copied')
//   }
//   if (key && key.ctrl && key.name == 'c') {
//     process.stdin.pause();
//   }
// });

// process.stdin.setRawMode(true);