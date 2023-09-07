import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vipins-todo';
  // data="VV";
  incoming:string;

  updateData(item:string){
    console.log(item);
    // this.data=item;
  }

  receiveData(data){
    this.incoming=data;

  }


//   name = "vipin";
//   list: any[] = [];


//   enterButton(item) {
// this.list.push({id:this.list.length ,name:item.value});

    // console.log("item is",item.value);
    // this.list.push({ id: this.list.length, name: item.value });
    // console.log("List that vipin has prepared",this.list);
  // }

  // nikalo(id){
  //   console.log("Id that you have clicked is",id);
  //   this.list=this.list.filter(insaan=>insaan.id!==id);
  // }

  // removeTask(id) {
  //   console.log(id);
  // }
}
