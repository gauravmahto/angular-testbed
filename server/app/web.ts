import '../globals';

import * as path from 'path';
import * as express from 'express';

import { TestA } from 'app/tests';

const app = express();

app.use(express.static(path.join(global.WEB_ROOT_DIR, '..', 'static')));

app.listen(8080);
console.log('Listening to 8080...');

// region - Various server tests.

const testA = new TestA();
testA.getObservable()
.toPromise()
.then((val) => {
  console.log('Got a new val: ')
  console.log(val)
})
  // .subscribe((val) => {
  //   console.log('Got a new val: ')
  //   console.log(val)
  // }, (err) => console.log('err: ', err), () => {
  //   console.log('complete')
  // })
  //.unsubscribe();
// testA.getObservable()
//   .subscribe((val) => {
//     console.log('Got a new val: ')
//     console.log(val)
//   });
// testA.getObservable()
//   .subscribe((val) => {
//     console.log('Got a new val: ')
//     console.log(val)
//   });
// testA.getObservable()
//   .subscribe((val) => {
//     console.log('Got a new val: ')
//     console.log(val)
//   });

// endregion - Various server tests.