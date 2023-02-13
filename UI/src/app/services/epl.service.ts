import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { EPLInterface } from '../models/epl-interface';

@Injectable({
  providedIn: 'root'
})
export class EPLService {

formData!: EPLInterface;
readonly APIUrl="http://localhost:59229/api";
cmp = "EPL";
private _listeners = new Subject<any>();
//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getEPLList(year:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/{year}/EPL' + year);
  }

  getNextPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/EPL' + year + '/PlayerID=' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/EPL' + year + '/PlayerID=' + val);
  }

  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/EPL',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/EPL',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/EPL',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'EPL/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
