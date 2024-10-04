/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  const final = {};

  try {
    const photo = await uploadPhoto();
    final.photo = photo;
  } catch (error) {
    final.photo = null;
  }

  try {
    const user = await createUser();
    final.user = user;
  } catch (error) {
    final.user = null;
  }

  return final;
}
