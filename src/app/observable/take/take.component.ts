import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../services/design-utilities.service';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss'
})
export class TakeComponent implements OnInit{

  constructor(private dUService:DesignUtilitiesService){

  }

  ngOnInit(): void {
    const source = ['Anup','Shekhar','Paul','John','Alex','Sharma','Rohit','Nitin'];
    //Ex01 Take
    from(source).pipe(take(5)).subscribe(res=>{
      this.dUService.print(res,'#ele1');
    });

    //Ex02 TakeLast
    from(source).pipe(takeLast(5)).subscribe(res=>{
      this.dUService.print(res,'#ele2');
    });

    //Ex03 Take Until

    const condition1 = timer(5000);
    const condition2 = fromEvent(document,'click');
    interval(1000).pipe(map(data=>'Number '+data),takeUntil(condition2)).subscribe(res=>{
      this.dUService.print(res,'#ele3');
    });
  }
}
