export interface IData {
  loading: boolean;
  films: { [key: string]: any | { [key: string]: string[] } }[];
  promo: { [key: string]: string }[];
}

export interface IDataArr {
  [key: string]: any | { [key: string]: string[] };
}
