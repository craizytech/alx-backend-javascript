// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([namesPromise, photoPromise]) => console.log(`${photoPromise.body} ${namesPromise.firstName} ${namesPromise.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
