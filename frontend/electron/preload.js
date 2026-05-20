import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  receive: (channel, fn) => ipcRenderer.on(channel, (event, ...args) => fn(...args)),
  platform: process.platform,
});