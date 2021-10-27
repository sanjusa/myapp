import { Version } from '@angular/compiler';
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef ,VERSION } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  version = VERSION.major;
  myObser = new BehaviorSubject(true)
  @ViewChild('container',{read:ViewContainerRef}) container! : ViewContainerRef;
  @ViewChild(ModalComponent) modal!: ModalComponent ;
  constructor(public componentFactorResolver:ComponentFactoryResolver){}

 /*  add(){
    const dynamicFactoryComponent = this.componentFactorResolver.resolveComponentFactory(ModalComponent);
    const componenRef = this.container.createComponent(dynamicFactoryComponent);
    componenRef.instance.display = 'show'

  } */
ngOnInit(){
 
  console.log('obse',this.myObser.getValue())
 this.myObser.next(false)
 this.myObser.subscribe(val=>{console.log('vals'+val)})
}
  testFunc()
  {
    return [{name:'sanjay'}]
  }
  testFunc1()
  {
    return [{name:'sanjay'}]
  }
  testFunc2()
  {
    return [{name:'sanjay'}]
  }
}
