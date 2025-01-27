import { Component, OnInit } from '@angular/core';
import { DesignUtilitiesService } from '../../../services/design-utilities.service';

@Component({
  selector: 'app-child3',
  imports: [],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss'
})
export class Child3Component implements OnInit{

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
