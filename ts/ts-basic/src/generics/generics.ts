export default function genericsSample () {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }

  console.log("Generics basic sample 1:", stringReduce(["May ", "the ", "force ", "be ", "with ", "you "], ""));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }

  console.log("Generics basic sample 2:", numberReduce([100,200,300], 1000));

  // generics指定
  type genericReduce<T> = {
    (array: T[], initialValue: T): T
  };

  const genericStringReduce: genericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }
  console.log("Generics basic sample 3:", genericStringReduce(["May ", "the ", "force ", "be ", "with ", "you "], ""));

  const genericNumberReduce: genericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }
  console.log("Generics basic sample 4:", genericNumberReduce([100,200,300], 1000));
}
