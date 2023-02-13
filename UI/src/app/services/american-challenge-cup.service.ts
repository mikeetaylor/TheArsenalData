import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AmericanChallengeCupInterface } from '../models/american-challenge-cup-interface';

@Injectable({
  providedIn: 'root'
})
export class AmericanChallengeCupService {

formData!: AmericanChallengeCupInterface;
readonly APIUrl="http://localhost:59229/api";
private _listeners = new Subject<any>();

//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getAmericanChallengeCupList(year:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/{year}/American_Challenge_Cup' + year);
  }

  getNextPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/American_Challenge_Cup' + year + '/PlayerID=' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/American_Challenge_Cup' + year + '/PlayerID=' + val);
  }

  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/American_Challenge_Cup',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/American_Challenge_Cup',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/American_Challenge_Cup',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'American_Challenge_Cup/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
