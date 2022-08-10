export enum ConnectionMessages {
  CONNECTED = 'Tunneling connection established',
  ERROR = `Tcp connection doesn't exist`,
  TIMEOUT = 'Connection timed out',
  DISCONNECTED = 'Tunneling connection closed',
  GET_DATA = 'GET data SUCCESS',
  PUT_DATA = 'PUT data SUCCESS',
}

export enum FilesHandlerStatuses {
  SUCCESS_WRITE_XML = 'XML file written successfully',
  SUCCESS_READ_XML = 'XML File has been successfully read',
  ERROR_WRITE_XML = `Error while writing XML file`,
  ERROR_READ_XML = `Can't read the XML file`,
  SUCCESS_WRITE_DSP = 'DSP file written successfully',
  SUCCESS_READ_DSP = 'DSP File has been successfully read',
  ERROR_WRITE_DSP = `Error while writing DSP file`,
  ERROR_READ_DSP = `Can't read the DSP file`,
}

export const enum Statuses {
  SUCCESS = 'SUCCESS',
  ERROR = `ERROR`,
  INFO = 'INFO',
}

export const DEFAULT_MESSAGE = 'Resault is unknown';
