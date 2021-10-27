import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './core/custom-preloading-strategy.service';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  redirectTo: 'home'
},
{path:'home',loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule),data:{shouldPreLoad:true}},
{path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule),data:{shouldPreLoad:true}},
{path:'demo',loadChildren:()=> import('./demo/demo.module').then(m=>m.DemoModule),data:{shouldPreLoad:false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:CustomPreloadingStrategyService,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
