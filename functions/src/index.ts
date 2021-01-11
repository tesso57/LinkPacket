import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {User} from '../../src/app/models/user'; // eslint-disable-line

export const getBookMarksdFromUserId =
  functions.https.onCall((data, context) => {
      const userId = data;
      functions.logger.info('userId: ' + userId);
      return admin.firestore()
        .collection('users')
        .doc(userId as string)
        .get()
        .then((doc) => {
          const user = doc.data() as User;
          return user.bookMarks;
        });
    }
  );
