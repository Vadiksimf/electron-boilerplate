import { Statuses, DEFAULT_MESSAGE } from '../types/statuses';

const createResponse = (
  data: any,
  message: string = DEFAULT_MESSAGE,
  status: string = Statuses.SUCCESS
) => ({
  data,
  statusInfo: {
    message,
    status,
  },
});

export default createResponse;
