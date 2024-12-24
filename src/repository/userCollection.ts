import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const userCollection = db.collection("USERS");

export const getUserById = async (id: string): Promise<User | null> => {
  const doc = await userCollection.doc(id).get();
  return doc.exists ? (doc.data() as User) : null;
};

export const updateUserById = async (
  id: string,
  data: Partial<User>
): Promise<void> => {
  await userCollection.doc(id).update(data);
};
