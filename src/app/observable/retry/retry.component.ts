import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  imports: [NgIf,NgClass],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.scss',
  providers:[]
})
export class RetryComponent implements OnInit{

  user:any;
  buttonText='Fetch Data';
  status='No Data';
  fetched = false;

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
  }

  fetchData():void{
    this.fetched = true;
    this.buttonText = 'Fetching...';
    this.status = 'Fetching...';
    this.http.get('https://dummyjson.com/users/1').pipe(//retry(3)
     retryWhen(err=>err.pipe(
      delay(5000),
      scan((errCount)=>{
        if(errCount>=5){
          throw err;
        }else{
          errCount+=1;
          this.status = 'Reattempt #'+errCount;
          return errCount;
        }
      },0)
    )))
    .subscribe(res=>{
      this.user=res;
      this.fetched = false;
      this.buttonText = 'Fetch Data';
      this.status = 'Data Fetched';
    },(error)=>{
      this.buttonText = 'Fetch Data';
      this.status = 'Problem in Data Fetching';
      this.fetched = false;
    })
  }

}
