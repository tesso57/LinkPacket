import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from '../forFirebase/config';
import { PageContainerComponent } from './components/styles/page-container/page-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PacketGalleyComponent } from './pages/packet-galley/packet-galley.component';
import { CardComponent } from './components/packetGalley/card/card.component';
import { CardlistComponent } from './components/packetGalley/cardlist/cardlist.component';
import { HeaderComponent } from './components/styles/header/header.component';
import { FooterComponent } from './components/styles/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateComponent } from './pages/create/create.component';
import { UsersComponent } from './pages/users/users.component';
import { PacketComponent } from './pages/packet/packet.component';
import { EditComponent } from './pages/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    PacketGalleyComponent,
    CardComponent,
    CardlistComponent,
    CreateComponent,
    UsersComponent,
    PacketComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
