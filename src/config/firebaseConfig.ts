import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// Construct the private key by replacing the escaped newline
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!privateKey) {
  throw new Error("FIREBASE_PRIVATE_KEY is not defined.");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: privateKey,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
