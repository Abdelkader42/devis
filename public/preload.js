const {ipcRenderer, contextBridge } = require('electron');

const API = {
    sendMsg: (msg) => ipcRenderer.send("SendIt", msg)
  }
 
  contextBridge.exposeInMainWorld('api', API);