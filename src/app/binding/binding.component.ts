import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit, OnChanges {
@Input() myInput: any;
toggle:boolean = false;
 val:any = 'text'
  constructor() { }
get value(){
  return this.val
}
 set value(val:any){
   // this.toggle??'text changed'
   this.val = val
 }
  ngOnInit(): void {
    console.log('myInput',this.myInput)
  }

  ngOnChanges(){
    console.log('my name is sanjay')
  }
}
