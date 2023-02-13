import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UCLInterface } from '../models/ucl-interface';

@Injectable({
  providedIn: 'root'
})
export class UCLService {

formData!: UCLInterface;
readonly APIUrl="http://localhost:59229/api";
private _listeners = new Subject<any>();

//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getUCLList(year:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/{year}/UEFA_Champions_League' + year);
  }

  getNextPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/UEFA_Champions_League' + year + '/PlayerID=' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/UEFA_Champions_League' + year + '/PlayerID=' + val);
  }

  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/UEFA_Champions_League',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/UEFA_Champions_League',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/UEFA_Champions_League',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'UEFA_Champions_League/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
