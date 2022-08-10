/* eslint-disable @typescript-eslint/no-unused-vars */
import { ipcMain, dialog } from 'electron';
import xmlFileReader from './utils/xmlFileReader';

export default (): void => {
  // ping server socket
  ipcMain.on('ipc-channel', async (event, _arg: unknown): Promise<void> => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    event.reply('ipc-channel', msgTemplate('pong'));
  });

  ipcMain.handle(
    'read-xml',
    (_e: Electron.IpcMainInvokeEvent, filePath: string) => {
      return xmlFileReader.readXmlFromDisk(filePath);
    }
  );

  ipcMain.handle(
    'write-xml',
    (
      _e: Electron.IpcMainInvokeEvent,
      args: { filePath: string; dataObject: unknown }
    ) => {
      const { filePath, dataObject } = args;
      return xmlFileReader.writeXmlToDisk(dataObject, filePath);
    }
  );

  ipcMain.handle('dialog', (_event, method, params) => {
    // @ts-expect-error "TS can't recognize types"
    return dialog[method](params);
  });
};
