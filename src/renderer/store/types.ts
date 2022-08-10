import { XmlState } from './files/types';

export type AppState = {
  files: {
    xml: XmlState;
  };
  logs: Array<string>;
};

export type StatusInfo = {
  status: string;
  message: string;
};

export type AppAction = {
  type: string;
  connection: boolean;
};

export const enum Statuses {
  SUCCESS = 'SUCCESS',
  ERROR = `ERROR`,
  INFO = 'INFO',
}
