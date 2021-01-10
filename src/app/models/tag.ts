import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {BookMark} from './book-mark';

export interface Tag {
  uid: string;
  bookMarks: Array<AngularFirestoreDocument<BookMark>>;
  name: string;
}
