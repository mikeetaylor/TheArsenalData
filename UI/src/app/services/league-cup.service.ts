import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LeagueCupInterface } from '../models/league-cup-interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueCupService {

formData!: LeagueCupInterface;
readonly APIUrl="http://localhost:59229/api";
private _listeners = new Subject<any>();

//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getLeagueCupList(year:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/{year}/League_Cup' + year);
  }

  getNextPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/League_Cup' + year + '/PlayerID=' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/League_Cup' + year + '/PlayerID=' + val);
  }

  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/League_Cup',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/League_Cup',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/League_Cup',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'League_Cup/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
