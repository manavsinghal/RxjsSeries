import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DesignUtilitiesService } from '../../services/design-utilities.service';

@Component({
  selector: 'app-custom-observable',
  imports: [NgClass],
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.scss'
})
export class CustomObservableComponent implements OnInit{

  techlistclass='';
  techlistclass1='';
  techlistclass2='';
  name='';

  constructor(private dUService:DesignUtilitiesService){

  }

  ngOnInit(): void {
    //Ex-01;

    const customObservable = Observable.create((observer:Observer<any>)=>{
      setTimeout(()=>{
      observer.next('Angular');
      },1000);

      setTimeout(()=>{
        observer.next('JavaScript');
      },2000);

      setTimeout(()=>{
          observer.next('TypeScript');
          //observer.error('Limit Exceeds');
      },3000);

      setTimeout(()=>{
            observer.next('Html and css');
      },4000);

      setTimeout(()=>{
              observer.next('Rxjs');
              observer.complete();
      },5000);
    });

    customObservable.subscribe((res: string)=>{
      this.dUService.print(res,'#ele1')
    },(error:any)=>{
      this.techlistclass='error';
    },()=>{
      this.techlistclass='completed';
    });


    //Ex 02

    const arr = ['Angular','TypeScript','Html & CSS','Javascript','Rxjs'];

    const customObservable1 = Observable.create((observer:Observer<any>)=>{
      let count=0;
      setInterval(()=>{
        observer.next(arr[count]);
        if(count>=4){
          observer.complete();
        }
        if(count>=3){
          observer.error('Error Emit');
        }
        count++;
      },1000);
    });

    customObservable1.subscribe((res:string)=>{
      console.log(res);
      this.dUService.print(res,'#ele2');
    },(error:string)=>{
      this.techlistclass1 = 'error';
    },()=>{
      this.techlistclass1 = 'completed';
    });


    //Ex 03

    const names=['Anup','Shekhar','Otwal','UxTrendz','John','Robert','Paul'];

    const customObservable2 = Observable.create((observer:Observer<string>)=>{
      let count=0;
      setInterval(()=>{
        observer.next(names[count]);
        if(count>=3){
          observer.error('Error Name');
        }

        if(count>=6){
          observer.complete();
        }
        count++;
      },1000);
    });

    customObservable2.subscribe((res:string)=>{
      this.name = res;
    },(error:string)=>{
      this.techlistclass2 = 'error';
    },()=>{
      this.techlistclass2='completed';
    })
  }
}
