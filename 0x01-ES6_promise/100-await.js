/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  const final = {};

  try {
    const photo = await uploadPhoto();
    final.photo = photo;
  } catch (error) {
    final.photo = null;
    throw new Error();
  }

  try {
    const user = await createUser();
    final.user = user;
  } catch (error) {
    final.user = null;
    throw new Error();
  }

  return final;
}
