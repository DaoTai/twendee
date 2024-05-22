type IUser = {
  name: IName;
  location: ILocation;
  login: ILogin;
  dob: IDob;
  registered: IRegistered;
  id: IId;
  picture: IPicture;
  gender: string;
  email: string;
  phone: string;
  cell: string;
  nat: string;
};

type IName = {
  title: string;
  first: string;
  last: string;
};

type ILocation = {
  street: Street;
  coordinates: Coordinates;
  timezone: Timezone;
  city: string;
  state: string;
  country: string;
  postcode: string;
};

type IStreet = {
  number: number;
  name: string;
};

type ICoordinates = {
  latitude: string;
  longitude: string;
};

type ITimezone = {
  offset: string;
  description: string;
};

type ILogin = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type IDob = {
  date: string;
  age: number;
};

type IRegistered = {
  date: string;
  age: number;
};

type IId = {
  name: string;
  value: string;
};

type IPicture = {
  large: string;
  medium: string;
  thumbnail: string;
};
