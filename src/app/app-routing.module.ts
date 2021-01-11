import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PacketGalleyComponent} from './pages/packet-galley/packet-galley.component';
import { LoginComponent } from './pages/login/login.component';
import {TestComponent} from './test/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'test', component: TestComponent},
  { path: 'view', component: PacketGalleyComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
