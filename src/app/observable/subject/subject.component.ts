import { Component, OnDestroy, OnInit } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-subject',
  imports: [Child1Component,Child2Component,Child3Component],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent implements OnInit,OnDestroy{

  userName = '';

  constructor(private designService:DesignUtilitiesService){
    this.designService.userName.subscribe(res=>{
      this.userName = res;
    })
  }

  ngOnInit(): void {
    this.designService.isExclusive.next(true);
  }

  ngOnDestroy(): void {
    this.designService.isExclusive.next(false);
  }
}
