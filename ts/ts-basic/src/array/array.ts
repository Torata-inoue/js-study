export default function arraySample () {
  const colors: string[] = [
    "red", "blue"
  ];
  colors.push("yellow");
  console.log("Array array Sample1: ", colors);

  const even: Array<number> = [2,4,6];
  even.push(10);
  console.log("Array array Sample2: ", even);

  const ids: (string | number)[] = ["ABC", 123];
  ids.push("DEF");
  ids.push(456);
  console.log("Array array Sample3: ", ids);

  const commands: readonly string[] = ['add', 'commit', 'push'];
  // commands.push("pull");
  // commands[2] = "checkout";
  console.log("Array array Sample4: ", commands)
}