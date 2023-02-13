import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CommunityShieldInterface } from '../models/community-shield-interface';

@Injectable({
  providedIn: 'root'
})
export class CommunityShieldService {

formData!: CommunityShieldInterface;
readonly APIUrl="http://localhost:59229/api";
private _listeners = new Subject<any>();

//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getCommunityShieldList(year:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/{year}/Community_Shield' + year);
  }

  getNextPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/Community_Shield' + year + '/PlayerID=' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/Community_Shield' + year + '/PlayerID=' + val);
  }

  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/Community_Shield',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/Community_Shield',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/Community_Shield',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'Community_Shield/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
