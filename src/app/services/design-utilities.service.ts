import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilitiesService {

  isExclusive= new Subject<boolean>();
  userName = new BehaviorSubject<string>('Manav');

  video = new ReplaySubject<string>(5);

  asyncSubject = new AsyncSubject<string>();
  
  constructor() { }

  print(video:string,id:string){
    let ele = document.createElement('li');
    ele.innerText = video;
    document.querySelector(id)?.appendChild(ele);
  }
}
