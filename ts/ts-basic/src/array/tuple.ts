export default function tupleSample () {
  let response: [number, string] = [200, 'OK'];
  response = [400, "Bad Request"];
  // response = [400, "Bad Request", "Email is invalid"];
  // response = ["400", "Bad Request"];
  console.log("Array tuple sample 1: ", response);

  const girlfriends: [string, ...string[]] = ["Kana", "Lisa", "Miku"];
  girlfriends.push("Yuka");
  console.log("Array tuple sample 2: ", girlfriends);


}