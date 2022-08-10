/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import { app } from 'electron';
import makeIpcMainEvents from './appEvents';
import createWindow from './window';
import logger from './utils/logger';

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    // Register IPC events
    makeIpcMainEvents();
    app.on('activate', () => {
      createWindow();
    });
  })
  .catch(console.log);

process.on('uncaughtException', (error) => {
  logger.error({ label: 'FATAL ERRROR!!!', message: error });
});
