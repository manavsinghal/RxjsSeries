import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../../services/design-utilities.service';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss'
})
export class Child2Component implements OnInit{

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
