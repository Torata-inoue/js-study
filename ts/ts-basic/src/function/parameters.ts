export const isUserSignIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('user login! username1', username)
    return true;
  } else {
    console.log('user is not logined1');
    return false;
  }
}

export const isUserSignIn2 = (userId: string, username = 'NO NAME') => {
  if (userId === 'ABC') {
    console.log('user login! username2', username)
    return true;
  } else {
    console.log('user is not logined2');
    return false;
  }
}

export const sumPrice = (...price: number[]): number => {
  return price.reduce((prevTotal, price) => {
    return prevTotal + price;
  }, 0)
}

type logMessage = (message: string) => void;
export const logMessage6: logMessage = (message: string) => {
  console.log('log message 6', message);
};

type FullLogMessage = {
  (message: string): void;
};

export const logMessage7: FullLogMessage = (message) => {
  console.log('log message 7', message);
}
