//import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { PreloadingStrategy ,Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [] ;
  constructor() { }
   preload(route:Route,loadChildren:() => Observable<any>):Observable<any>{
     if(route.data && route.data['shouldPreLoad']==true )
    {
      this.preloadedModules.push(route.path?route.path:'');
      console.log('preload',this.preloadedModules)
      
      return loadChildren()
    }
    else{
    console.log('No Preload')
      return of(null)
    }
  }
}
