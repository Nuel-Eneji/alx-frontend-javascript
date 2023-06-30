import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  let userResult;
  let photoResult;

  try {
    userResult = await userPromise;
  } catch (error) {
    userResult = error;
  }

  try {
    photoResult = await photoPromise;
  } catch (error) {
    photoResult = error;
  }

  return [
    { status: userPromise.status, value: userResult },
    { status: photoPromise.status, value: photoResult },
  ];
}

export default handleProfileSignup;

