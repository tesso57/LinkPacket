import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from './user';
import {Tag} from './tag';

export interface BookMark {
  uid: string;
  userRef: AngularFirestoreDocument<User>;
  tagRefs: AngularFirestoreDocument<Tag>[];
}
