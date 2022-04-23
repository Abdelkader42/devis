const {ipcRenderer, contextBridge } = require('electron');

const API = {
    sendMsg: (msg) => ipcRenderer.send("SendIt", msg),
    renderPdf: (url) => ipcRenderer.send("renderPdf", url),
  }
 
  contextBridge.exposeInMainWorld('api', API);