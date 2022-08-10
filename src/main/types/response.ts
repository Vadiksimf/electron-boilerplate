export default interface IResponse {
  data: unknown;
  statusInfo: {
    status: string;
    message: string;
  };
}
