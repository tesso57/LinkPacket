import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {User} from '../../src/app/models/user'; // eslint-disable-line

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const getBookMarkFromUserId =
  functions.https.onRequest(async (request, response) => {
    const userId: unknown = request.query;
    functions.logger.info('userId: ' + userId, {structuredData: true});
    const bookMark = await admin.firestore()
        .collection('users')
        .doc(userId as string)
        .get()
        .then((doc) => {
          const user = doc.data() as User;
          return user.bookMarks;
        });
    response.json({result: bookMark});
  });
