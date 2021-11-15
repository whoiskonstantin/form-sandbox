export function mockSubmitRequest() {
  let isSuccess = false;
  // Random number under 10.
  const randomNumber = Math.floor(Math.random() * 10);
  // If divisable by 2 set isSuccess to true.
  if (randomNumber % 2) {
    isSuccess = true;
  }

  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        return resolve({ code: 200, message: "User created" });
      }
      return reject({ code: 400, message: "User already exists" });
    }, 1500);
  });

  return response;
}
