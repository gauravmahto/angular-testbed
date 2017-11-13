import { Observable } from 'rxjs/Rx';
import { setTimeout, setInterval, clearInterval } from 'timers';

export class TestA {

  // private pendingRequest: Observable<string> | undefined;
  private requestCount = 0;

  private getPromise(val: string): Promise<string> {

    return new Promise((res) => {

      console.log('Made request...', this.requestCount++);
      setTimeout(res, 1000, val);

    });

  }

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
        console.log('Destroy called....');
      };

    });

  }

}