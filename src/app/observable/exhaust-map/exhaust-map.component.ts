import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  imports: [NgIf],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent implements OnInit,AfterViewInit{
  num :number = 0;
  fetching :boolean = false;
  saveRequest!:number;

  @ViewChild('btn') btn!:ElementRef;
  
  constructor(private http:HttpClient){

  }

  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement,'click').pipe(
      tap(()=>this.fetching = true),
      exhaustMap(()=>this.onSave(this.num++))
    ).subscribe(res=>{
      console.log(res);
      this.fetching = false;
      this.getData();
    })
  }

  onSave(change:number){
    return this.http.post(this.url,{data:change})
  }

  getData(){
    this.http.get(this.url).pipe(map((res:any)=>res.Data)).subscribe(res=>{
      this.saveRequest = res;
    });
  }
}
