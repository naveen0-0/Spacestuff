export interface IPictureOfTheDay {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface IError {
  message: string;
  status: number;
}
