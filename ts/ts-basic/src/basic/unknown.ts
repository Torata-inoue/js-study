export default function unknownSample () {
  let maybeNumber: unknown = 10;

  // const sum = maybeNumber + 10;

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10;
  }
}