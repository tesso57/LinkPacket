import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {BookMark} from './book-mark';

export interface User {
  uid: string;
  bookMarks?: AngularFirestoreDocument<BookMark>;
  displayName?: string;
  photoURL?: string;
}
