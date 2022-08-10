import { Statuses } from '../types';

export type LogsState = {
  logs: {
    status: Statuses;
    message: string;
  }[],
  isShowed: boolean
};

export const DEFAULT_MESSAGE: string = 'Resault is unknown';
