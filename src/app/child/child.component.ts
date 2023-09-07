import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  response:any[];
  name:any[];

  constructor() { }

  // @Output() updateDataEvent=new EventEmitter<string>();
  @Output() dataEmitter=new EventEmitter();

  sendDataToParent(){
    this.response=[
      {name:'Kran', age:25},
      {name:'sunny', age:30}
  ]
    this.response.forEach(item=>{
    const names=item.name;
  });
  // this.name=names;
    this.dataEmitter.emit(this.name);
  }

  ngOnInit() {
  }

}
