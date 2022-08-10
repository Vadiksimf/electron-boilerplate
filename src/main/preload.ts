import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-channel';

const dialogConfig = {
  title: 'Save a file',
  buttonLabel: 'Save',
  properties: ['saveFile'],
};

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    getAllData: () => {
      return ipcRenderer.invoke('get-all-data');
    },
  },
  filesController: {
    readXmlFile(filePath: string) {
      return ipcRenderer.invoke('read-xml', filePath);
    },
    writeXmlFile(args: { filePath: string; dataObject: unknown }) {
      return ipcRenderer.invoke('write-xml', args);
    },
    openSaveDialog() {
      return ipcRenderer.invoke('dialog', 'showSaveDialog', dialogConfig);
    },
  },
});
