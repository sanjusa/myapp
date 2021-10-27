import { AfterViewChecked, ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, SimpleChange } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-customform',
  templateUrl: './customform.component.html',
  styleUrls: ['./customform.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=> CustomformComponent) ,
     multi:true}],
     changeDetection: ChangeDetectionStrategy.Default
 
}) 
export class CustomformComponent implements ControlValueAccessor ,AfterViewChecked {
  @Input()val!:any;
 
   value!:string
   onChange!: (ev:Event) => void;
  onTouched!:() => void;
  disabled!:boolean;


  writeValue(value: string) {
    console.log('value',value)
    this.value = value
  }
  registerOnChange(fn: any){
    console.log('==>',fn)
    this.onChange = fn
    console.log('==>',this.onChange)
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn; // <-- save the function
  }
  setDisabledState(isDisabled: any) {
    this.disabled = isDisabled;
  }
  ngOnInit(){
    
  }
  ngOnChanges(changes:SimpleChange){
   console.log('changes',changes)
   this.val = changes.currentValue
  }
ngAfterViewChecked(){}
}
