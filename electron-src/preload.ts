/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ipcRenderer, contextBridge } from 'electron'
import { promises as fs } from 'fs'
import { join } from 'path'


export const openFileDialog = () => {
  try {
    return []
  } catch (error) {
    return []
  }
}

export const getDataFromCsv = async (filePath: string) => {
  try {
    const raw = await fs.readFile(filePath, "utf-8")
    const data = raw.split("\r\n")
    return {
      timestamp: data.map((val) => val.split(',')[0]),
      temperature: data.map((val) => val.split(',')[1]),
      humidity: data.map((val) => val.split(',')[2])
    }
  } catch (error) {
    return {}
  }

}

contextBridge.exposeInMainWorld('files', {
  openFileDialog,
  ipcRenderer,
  getDataFromCsv,
  startDrag: (fileName: string) => {
    ipcRenderer.send('ondragstart', join(process.cwd(), fileName))
  }
});