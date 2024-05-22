type IListUserResponse = {
  results: IUser[];
  info: IInfo;
};

type IInfo = {
  seed: string;
  version: string;
  results: number;
  page: number;
};
