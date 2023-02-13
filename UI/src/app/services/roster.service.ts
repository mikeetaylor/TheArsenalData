import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CountryInterface } from '../models/country-interface';
import { PositionInterface } from '../models/position-interface';
import { RosterInterface } from '../models/roster-interface';
import { SeasonInterface } from '../models/season-interface';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  // league!: string;

  // formData!: RosterInterface;

readonly APIUrl="http://localhost:5000/api";
private _listeners = new Subject<any>();
//readonly PhotoURL="http://localhost:5000/Photos";

  constructor(private http:HttpClient) { }

  // getPlayerList(year:string, league:string):Observable<any[]>{
  //   return this.http.get<any[]>(this.APIUrl+'/{year}/' + league + year);
  // }

  getRosterList(year:string):Observable<RosterInterface[]>{
    return this.http.get<RosterInterface[]>(this.APIUrl+'/Roster' + year)
    .pipe(
      catchError(this.handleError)
      );
  }

  getCountryList():Observable<CountryInterface[]>{
    return this.http.get<CountryInterface[]>(this.APIUrl+'/Country')
    .pipe(
      catchError(this.handleError)
      );
  }

  getPositionList():Observable<PositionInterface[]>{
    return this.http.get<PositionInterface[]>(this.APIUrl+'/Position')
    .pipe(
      catchError(this.handleError)
      );
  }

  getSeasonList():Observable<SeasonInterface[]>{
    return this.http.get<SeasonInterface[]>(this.APIUrl+'/Season')
    .pipe(
      catchError(this.handleError)
      );
  }

  xxxService(year:string, WhichPlayer:number):Observable<RosterInterface[]>{
    return this.http.get<RosterInterface[]>(this.APIUrl+'/Roster' + year + '/' + WhichPlayer)
    .pipe(
      catchError(this.handleError)
      );
  }

  getNextPlayer(val:number, year:string):Observable<any[]>{
    console.log(val);
    return this.http.get<any[]>(this.APIUrl+ '/Roster' + year + '/' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/Roster' + year + '/PlayerID=' + val);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/Roster20302031/',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/Roster20302031/',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/Roster20302031/' + val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/{year}/Roster/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }

    return throwError('It all went straight to hell.');
  }

}
