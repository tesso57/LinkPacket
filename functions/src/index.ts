// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// admin.initializeApp();
//
// import {User} from '../../src/app/models/user'; // eslint-disable-line
//
// export const getBookMarksdFromUserId =
//   functions.https.onCall((data, context) => {
//       const userId = data.userId;
//       functions.logger.info('userId: ' + userId);
//       return admin.firestore()
//         .collection('users')
//         .doc(userId as string)
//         .get()
//         .then((doc) => {
//           const user = doc.data() as User;
//           return user.bookMarks;
//         });
//     }
//   );
//
//
// // export const getBookMarksFromUserId =
// //   functions.https.onRequest(async (request, response) => {
// //     const userId: unknown = 'e0GzJEgM7l24O0gladS9'; // request.query.text;
// //     functions.logger.info('userId: ' + userId, {structuredData: true});
// //     const bookMark = await admin.firestore()
// //         .collection('users')
// //         .doc(userId as string)
// //         .get()
// //         .then((doc) => {
// //           const user = doc.data() as User;
// //           return user.bookMarks;
// //         });
// //     response.json({result: bookMark});
// //   });
//
// // Take the text parameter passed to this HTTP endpoint and insert it into
// // Cloud Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//   const writeResult = await admin.firestore()
//       .collection('messages').add({original: original});
//   // Send back a message that we've succesfully written the message
//   res.json({result: `Message with ID: ${writeResult.id} added.`});
// });
