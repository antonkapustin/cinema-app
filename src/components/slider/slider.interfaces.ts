export interface IData {
  loading: boolean;
  films: { [key: string]: any | { [key: string]: string[] } }[];
}

export interface IDataFilms {
  [key: string]: any | { [key: string]: string[] };
}
