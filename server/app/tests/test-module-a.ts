/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import { Observable } from 'rxjs/Rx';
import { clearInterval, setInterval, setTimeout } from 'timers';

const log = console.log;

export class TestA {

  // private pendingRequest: Observable<string> | undefined;
  private requestCount = 0;

  public getObservable(): Observable<any> {

    return new Observable((observer) => {

      // code:1
      const interval = setInterval(() => {
        if (this.requestCount > 2) {
          return observer.complete();
        }

        // if (this.requestCount === 2) {
        //   return observer.error('Causing error!');
        // }

        this.getPromise('Hey : ' + this.requestCount)
          .then((res: any) => observer.next(res));
      }, 2000);

      return () => {
        clearInterval(interval); // un-comment if code:1 is un-commented
        log('Destroy called....');
      };

    });

  }

  private getPromise(val: string): Promise<string> {

    return new Promise((res) => {

      log('Made request...', this.requestCount++);
      setTimeout(res, 1000, val);

    });

  }

}
