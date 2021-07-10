export default function objectSample () {
  const a: object = {
    name: 'tora',
    age: 24
  };

  let country: {
    language: string,
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan'
  };

  console.log('Object object sample 1:', country)


  country = {
    language: 'English',
    name: 'US'
  }
  console.log('Object object sample 2:', country);

  const obj: {
    age: number,
    lastName: string,
    readonly firstName: string,
    gender?: string
  } = {
    age: 23,
    lastName: "Yamada",
    firstName: "Tarou"
  };

  obj.age = 23;
  obj.lastName = "Tanaka";
  // obj.firstName = "Transform";

  console.log('Object object sample 3:', obj);

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: "Tokyo",
    Korea: "Seoul"
  };

  capitals.China = "Benjamin";
  capitals.Canada = "Ottawa";
  console.log('Object object sample 4:', capitals);
}