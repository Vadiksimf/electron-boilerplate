export type XmlState = {
  xmlTemplate: unknown;
  data: unknown;
};

export type FilesState = {
  xml: XmlState;
};

export type ResponseData = {
  data: unknown;
  statusInfo: {
    status: string;
    message: string;
  };
};

export interface IChangeChannelPayload {
  param: string;
  value: number;
  channel: string;
}

export interface IChangeFilterPayload {
  param: string;
  value: number;
  channel: string | string[];
  filter: string;
}

export type DispatchType = (args: ResponseData) => ResponseData;

export enum FilesHandlerStatuses {
  SUCCESS_WRITE_XML = 'XML file written successfully',
  ERROR_WRITE_XML = `Error while writing XML file`,
}
