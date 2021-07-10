export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message);
};

export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message);
}

export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3:', message);
};

export const logMessage4 = (message: string): void => console.log('Function basic sample 4:', message);

export const alwaysThrow = (message: string): void => {
  throw new Error(message);
};
