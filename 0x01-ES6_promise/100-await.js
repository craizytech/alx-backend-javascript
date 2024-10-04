/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();

    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      user: null,
      photo: null,
    };
  }
}
