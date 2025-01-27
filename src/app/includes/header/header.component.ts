import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
  exclusive:boolean = false;

  constructor(private designUtilities:DesignUtilitiesService){

  }

  ngOnInit(): void {
    this.designUtilities.isExclusive.subscribe(res=>{
      this.exclusive = res;
    })
  }
}
