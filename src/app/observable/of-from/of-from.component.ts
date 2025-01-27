import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit{

  objObs:any;
  constructor(private designUtilities:DesignUtilitiesService){

  }
   ngOnInit(): void {
     // of examples

     const stream = of('Anup','Shekhar','Otwal');
     stream.subscribe(res=>{
      this.designUtilities.print(res,'#ele1');
     });
     const ofstream2 = of({a:'Anup',b:'Shekhar',c:'Otwal'});
     ofstream2.subscribe(res=>{
      console.log(res);
        this.objObs = res;
     });

     // from examples

     //1. Using Array

     const fromStream1= from(['Mango','Banana','Apple']);
     fromStream1.subscribe(res=>{
      this.designUtilities.print(res,'#ele3');
     });

     const fromPromise = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve('Promise Resolved');
        },3000);
     });

     const fromStream2 = from(fromPromise);
     fromStream2.subscribe(res=>{
      this.designUtilities.print(res,'#ele4');
     });

     const fromStream3 = from('My Name is Manav');
     fromStream3.subscribe(res=>{
      this.designUtilities.print(res,'#ele5');
     });
   }
}
