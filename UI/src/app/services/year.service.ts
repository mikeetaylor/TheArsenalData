import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  private messageSource = new BehaviorSubject<string>("");
  changeVar = this.messageSource.asObservable();
  value: string;
  teamYear: string = '20302031';

  constructor() { }

  changeTheYear (changeVar) {
    this.messageSource.next(changeVar)
  }

  setTeamYear(value) {
    this.teamYear = value;
  }
}
