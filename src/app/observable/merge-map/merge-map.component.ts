import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements OnInit{

  constructor(private duService:DesignUtilitiesService){

  }

  getData(res:string){
    return of(res+' video uploaded');
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

    source.pipe(map(res=>this.getData(res)),mergeAll()).subscribe(res=>{
      console.log(res);
      this.duService.print(res,'#ele2');
    });

    //Ex-03 mergeMap

    source.pipe(mergeMap(res=>this.getData(res))).subscribe(res=>{
      console.log(res);
      this.duService.print(res,'#ele3');
    });
  }

  
}
