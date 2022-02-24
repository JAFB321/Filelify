/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ipcRenderer, contextBridge } from 'electron'
import * as fs from 'fs'

const getFiles = () => {
  return fs.readdirSync('/media/jafb-disk/personal-projects');
}

contextBridge.exposeInMainWorld('files', {
  getFiles,
  ipcRenderer
});