import { MirrorComponent } from './mirror/mirror.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { "path": "mirror", "component": MirrorComponent },
    { "path": '**',  "redirectTo": "mirror" }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}