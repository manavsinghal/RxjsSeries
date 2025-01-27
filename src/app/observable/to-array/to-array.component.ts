import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-to-array',
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent implements OnInit{

  constructor(private dUS:DesignUtilitiesService){

  }
  ngOnInit(): void {
    const source1 = interval(1000);

    source1.pipe(take(5),toArray()).subscribe(res=>{
      console.log(res);
    });

    const source2 = from([{name:'Mango',color:'yellow'},{name:'Orange',color:'Orange'}]);
    source2.pipe(toArray()).subscribe(res=>{
      console.log(res);
    });

    const source3 = of('Mango',{name:'Orange',color:'Orange'});
    source3.pipe(toArray()).subscribe(res=>{
      console.log(res);
    });
  }
}
