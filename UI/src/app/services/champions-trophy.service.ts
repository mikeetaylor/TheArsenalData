import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ChampionsTrophyInterface } from '../models/champions-trophy-interface';

@Injectable({
  providedIn: 'root'
})
export class ChampionsTrophyService {

formData!: ChampionsTrophyInterface;
readonly APIUrl="http://localhost:59229/api";
private _listeners = new Subject<any>();

//readonly PhotoURL="http://localhost:59229/Photos";

  constructor(private http:HttpClient) { }

  getChampionsTrophyList(year:string):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/{year}/Champions_Trophy' + year);
  }

  getNextPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/Champions_Trophy' + year + '/PlayerID=' + val);
  }

  getPrevPlayer(val:number, year:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+ '/{year}/Champions_Trophy' + year + '/PlayerID=' + val);
  }

  addPlayerToRoster(val:any){
    return this.http.post(this.APIUrl+'/Champions_Trophy',val);
  }

  updatePlayerOnRoster(val:any){
    return this.http.put(this.APIUrl+'/Champions_Trophy',val);
  }

  deletePlayerFromRoster(val:any){
    return this.http.delete(this.APIUrl+'/Champions_Trophy',val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'Champions_Trophy/SaveFile',val);
  }

  listen(): Observable<any>{
    return this._listeners.asObservable();
  }

  filter(filterBy: string){
    this._listeners.next(filterBy);
  }

}
