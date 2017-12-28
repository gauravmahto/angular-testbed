/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import '../globals';

import * as express from 'express';
import * as path from 'path';

import { TestA } from 'app/tests';

const log = console.log;
const app = express();

app.use(express.static(path.join(global.WEB_ROOT_DIR, '..', 'static')));

app.listen(8080);
log('Listening to 8080...');

// region - Various server tests.

const testA = new TestA();
testA.getObservable()
.toPromise()
.then((val) => {
  log('Got a new val: ');
  log(val);
});
  // .subscribe((val) => {
  //   log('Got a new val: ')
  //   log(val)
  // }, (err) => console.log('err: ', err), () => {
  //   log('complete')
  // })
  // .unsubscribe();
// testA.getObservable()
//   .subscribe((val) => {
//     log('Got a new val: ')
//     log(val)
//   });
// testA.getObservable()
//   .subscribe((val) => {
//     log('Got a new val: ')
//     log(val)
//   });
// testA.getObservable()
//   .subscribe((val) => {
//     log('Got a new val: ')
//     log(val)
//   });

// endregion - Various server tests.
