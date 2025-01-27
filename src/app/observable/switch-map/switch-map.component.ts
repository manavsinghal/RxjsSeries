import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements OnInit{

  constructor(private duService:DesignUtilitiesService){

  }

  getData(res:string){
    return of(res+' video uploaded').pipe(delay(2000));
  }
  
  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']);
    //Ex-01 Map

    source.pipe(map((res:string)=>this.getData(res))).subscribe(res=>res.subscribe(res2=>{
      this.duService.print(res2,'#ele1');
    }));

    //Ex-02 Map + switchAll

    source.pipe(map((res:string)=>this.getData(res)),switchAll()).subscribe(res=>{
      this.duService.print(res,'#ele2');
    });

    //Ex-03 SwitchMap

    source.pipe(switchMap((res:string)=>this.getData(res))).subscribe(res=>{
      this.duService.print(res,'#ele3');
    })

    //Ex-04 MergeMap

    source.pipe(mergeMap((res:string)=>this.getData(res))).subscribe(res=>{
      this.duService.print(res,'#ele4');
    })

    //Ex-05 Map

    source.pipe(concatMap((res:string)=>this.getData(res))).subscribe(res=>{
      this.duService.print(res,'#ele5');
    })

    //Ex-06 Map

    source.pipe(switchMap((res:string)=>this.getData(res))).subscribe(res=>{
      this.duService.print(res,'#ele6');
    })
  }

}
