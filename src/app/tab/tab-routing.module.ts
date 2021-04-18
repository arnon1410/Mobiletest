import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children:[
      {path:"adddelete", loadChildren: () => import('src/app/adddelete/adddelete.module').then( m => m.AdddeletePageModule)},
      {path:"sum", loadChildren: () => import('src/app/sum/sum.module').then( m => m.SumPageModule)},
      {path: "profile", loadChildren: () => import('src/app/profile/profile.module').then( m => m.ProfilePageModule)}
    ]
  },
  {
    path:'',
    redirectTo: "tab/adddelete",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
