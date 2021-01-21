import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private myData = new BehaviorSubject<SomeModel>(null);

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<SomeModel> {
    return this.httpClient
      .get<SomeModel>('http://localhost:53541/weatherforecast')
      .pipe(
        switchMap((response) => {
          this.myData.next(response);
          return this.myData.asObservable();
        }
        )
      )
  }

  public updateOrSaveData(thingToSave: SomeModel): void {
    //do api call or whatever
    this.myData.next(thingToSave);
  }
}

export class SomeModel {
  property1: string;
}
