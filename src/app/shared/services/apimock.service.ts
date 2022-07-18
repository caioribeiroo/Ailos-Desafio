import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApimockService {

  constructor() { }

  getCPF(): Observable<object> {
    return new Observable((subscribe) => {
      subscribe.next({
        registrationSituation: {
          name: 'Mariane de Sousa Oliveira',
          situation: 'Regular'
        },
        applicationAccount: {
          number: '557932-4'
        },
        currentAccount: {
          number: '778461-8'
        }
      })
      subscribe.complete();
    });
  }
}
