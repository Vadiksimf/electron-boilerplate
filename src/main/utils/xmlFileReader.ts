import { promisify } from 'util';
import createResponse from './createResponse';
import { Statuses, FilesHandlerStatuses } from '../types/statuses';
import IResponse from '../types/response';
import logger from './logger';

const fsPromises = require('fs').promises;
const xml2js = require('xml2js');

const xmlReader = {
  readXmlFromDisk: async (filePath: string): Promise<IResponse> => {
    try {
      const parser = new xml2js.Parser();
      const file = await fsPromises.readFile(filePath, 'utf-8');
      let data: unknown | null = null;
      const parserAsync = promisify(parser.parseString);
      data = await parserAsync(file);
      return createResponse(data, FilesHandlerStatuses.SUCCESS_READ_XML);
    } catch (error: any) {
      logger.error({ label: 'XML File Reader', message: error });
      return createResponse(
        null,
        error?.message || FilesHandlerStatuses.ERROR_READ_XML,
        Statuses.ERROR
      );
    }
  },
  writeXmlToDisk: async (
    data: unknown,
    filePath: string
  ): Promise<IResponse> => {
    try {
      const xmlBuilder = new xml2js.Builder();
      const xml = xmlBuilder.buildObject(data);
      await fsPromises.writeFile(filePath, xml, 'utf-8');
      return createResponse(null, FilesHandlerStatuses.SUCCESS_WRITE_XML);
    } catch (error: any) {
      logger.error({ label: 'XML File Reader', message: error });
      return createResponse(
        null,
        error?.message || FilesHandlerStatuses.ERROR_WRITE_XML,
        Statuses.ERROR
      );
    }
  },
};

export default xmlReader;
