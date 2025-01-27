import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../../services/design-utilities.service';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component implements OnInit{

  userName = '';
  
  constructor(private designService:DesignUtilitiesService){
    this.designService.userName.subscribe(res=>{
      this.userName = res;
    })
  }

  ngOnInit(): void {
    
  }

  changeUserName(ele:any){
    this.designService.userName.next(ele.value);
  }
}
