export default function getResponseFromAPI() {
  const newPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('The promise has successfully resolved!');
    } else {
      reject(new Error('The operation Failed!'));
    }
  });
  return newPromise;
}
