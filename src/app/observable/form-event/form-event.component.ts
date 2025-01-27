import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-form-event',
  imports: [],
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.scss'
})
export class FormEventComponent implements OnInit,AfterViewInit {

  @ViewChild('addbtn') addbtn!:ElementRef

  constructor(private _designUtilities:DesignUtilitiesService){

  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
        // console.log(res);     click event is logged.
        this._designUtilities.print('video '+count++,'#stream-data');
        this._designUtilities.print('video '+count++,'#stream-data1');
    })
  }

  
}
