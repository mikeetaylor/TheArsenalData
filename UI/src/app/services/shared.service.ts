import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { INonRosterColumnHeaders } from '../models/non-roster-column-headers';
import { IRosterColumnHeaders } from '../models/roster-column-headers';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  formData!: IRosterColumnHeaders;

readonly APIUrl="http://localhost:59229/api/";
private _listeners = new Subject<any>();
//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getRosterList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Roster');
  }

  getRosterList2021_2022():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Roster20212022');
  }

  getRosterList2022_2023():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Roster20222023');
  }

  getRosterList2023_2024():Observable<IRosterColumnHeaders>{
    return this.http.get<IRosterColumnHeaders>(this.APIUrl+'/Roster20232024');
  }

  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/Roster',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/Roster',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/Roster',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'Roster/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
