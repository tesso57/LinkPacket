import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserDbService} from '../UserDb/user-db.service';
// import {Router} from '@angular/router';  ←guard作るときに使う
import {Observable, of} from 'rxjs';
import {User} from '../../models/user';
import {switchMap} from 'rxjs/operators';
// @ts-ignore
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private userDbService: UserDbService,
    // private router: Router  ←guard作るときに使う
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.userDbService.getUserFromUid(user.uid);
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user: User): Promise<void> {
    // Sets user data to firestore on login
    const userRef = this.userDbService.getUserRefFromUid(user.uid);

    const data: User = {
      uid: user.uid,
      bookMarks: user.bookMarks || null,
      displayName: user.displayName || ''
    };

    return userRef.set(data, {merge: true});
  }
}
