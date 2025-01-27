import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent implements OnInit {

  promiseVal!:string;
  buyLaptop!:Promise<string>;

  ngOnInit(): void {
    this.buyLaptop= new Promise<string>((resolve,reject)=>{
      if(this.dellLaptop()){
        setTimeout(()=>{
      resolve('Dell Laptop Purchased');
    },3000);
      }else if(this.hpLaptop()){
        setTimeout(()=>{
          resolve('hp Laptop Purchased');
        },3000);
      }else{
        setTimeout(()=>{
          reject('Not purchased');
        },3000);
      }
    });

    // this.buyLaptop.then((res)=>{
    //   this.promiseVal = res;
    //     console.log('then code=>', res);
    // }).catch(error=>{
    //   this.promiseVal = error;
    //   console.log('catch code=>',error)
    // })

    this.getWhichLaptopPurchased().then(res=>this.promiseVal=res).catch(error=>this.promiseVal=error);
  }

  dellLaptop(){
    return false;
  }

  hpLaptop(){
    return false;
  }

  async getWhichLaptopPurchased(){
    let res = await this.buyLaptop;
    return res;
  }
}
