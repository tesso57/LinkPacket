import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PacketGalleyComponent} from './pages/packet-galley/packet-galley.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { CreateComponent } from './pages/create/create.component';
import { PacketComponent } from './pages/packet/packet.component';
import { UsersComponent } from './pages/users/users.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: '', component: PacketGalleyComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'packet/:packetId', component: PacketComponent },
  { path: 'users/:userId', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
