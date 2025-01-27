import { Component, OnInit } from '@angular/core';
import { of, from, map, mergeMap, concatMap, delay } from 'rxjs';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-concat-map',
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent implements OnInit{

   constructor(private duService:DesignUtilitiesService){
  
    }
  
    getData(res:string){
      return of(res+' video uploaded').pipe(delay(2000));
    }
  
    ngOnInit(): void {
      const source = from(['Tech','Comedy','News']);
  
      //Ex-01 Map
  
      source.pipe(map(res=>this.getData(res))).subscribe(res=>{
        console.log(res);
        res.subscribe(res2=>{
          this.duService.print(res2,'#ele1');
        })
      });
  
      //Ex-02 Map + MergeALL
  
      source.pipe(mergeMap(res=>this.getData(res))).subscribe(res=>{
        console.log(res);
        this.duService.print(res,'#ele2');
      });
  
      //Ex-03 mergeMap
  
      source.pipe(concatMap(res=>this.getData(res))).subscribe(res=>{
        console.log(res);
        this.duService.print(res,'#ele3');
      });
    }
}
