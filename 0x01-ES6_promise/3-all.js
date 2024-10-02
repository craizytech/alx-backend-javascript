import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const namesPromise = createUser();
  const photoPromise = uploadPhoto();

  Promise.all([namesPromise, photoPromise])
    .then((values) => console.log(values[1].body, values[0].firstName, values[0].lastName))
    .catch(() => console.log('Signup system offline'));
}
