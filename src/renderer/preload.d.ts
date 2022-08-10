import { Channels } from 'main/preload';
import { ResponseData as ResponseFilesData } from './store/files/types';

declare global {
  interface Window {
    electron: {
      filesController: {
        readXmlFile: (filePath: string) => Promise<ResponseFilesData>;
        writeXmlFile: ({
          dataObject,
          filepath,
        }: any) => Promise<ResponseFilesData>;
        openSaveDialog: () => Promise<{ filePath: string }>;
      };
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
        getAllData: () => Promise<unknown>;
      };
    };
  }
}

export {};
