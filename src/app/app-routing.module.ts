import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTestComponent } from './admin/containers/maintainers/visit/view-test/view-test.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
  //  canActivate: [AuthGuard , NgxPermissionsGuard ],
    component: ViewTestComponent,
    // data: {
    //   permissions: {
    //     only: 'put_dashBoard',
    //     redirectTo: '/admin/without-permission',
    //   },
    // },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
