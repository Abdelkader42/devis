const path = require("path");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log")

const {
  app,
  BrowserWindow,
  ipcRenderer,
  ipcMain,
  contextBridge,
} = require("electron");
const isDev = require("electron-is-dev");
var nodemailer = require("nodemailer");
const { join } = require("path");
const PDFWindow = require("electron-pdf-window");
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: join(__dirname, "./preload.js"),
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (!isDev) {
		autoUpdater.checkForUpdates();
	};
  // Open the DevTools.
  // if (isDev) {
  //   win.webContents.openDevTools({ mode: "detach" });
  // }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function SendIt(mailOptions) {
  console.log("in the sendIt function");
  console.log(mailOptions.attachments[0].path)
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "abelgheddouche@gmail.com",
      pass: "xidlhqhgulqfcnau",
    },
  });
  console.log("before sendMail");
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}

ipcMain.on("SendIt", (event, mailOptions) => {
  console.log("ipcMain: Executing SendIt");
  SendIt(mailOptions);
});

ipcMain.on("renderPdf", (event, url) => {
  renderPdf(url);
});

function renderPdf(url) {
  console.log(url);
//   console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn pdf')
//   const win = new BrowserWindow({ width: 800, height: 600 });
//    PDFWindow.addSupport(win);
//  console.log(url);
//    win.loadURL(url);
 // renderToFile(url,'./my-doc.pdf')
}

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (info) => {
  sendStatusToWindow('Update not available.');
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err);
})

autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
	const dialogOpts = {
		type: 'info',
		buttons: ['Ok'],
		title: 'Application Update',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: 'A new version is being downloaded.'
	}
	dialog.showMessageBox(dialogOpts, (response) => {

	});
})

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
	const dialogOpts = {
		type: 'info',
		buttons: ['Restart', 'Later'],
		title: 'Application Update',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: 'A new version has been downloaded. Restart the application to apply the updates.'
	};
	dialog.showMessageBox(dialogOpts).then((returnValue) => {
		if (returnValue.response === 0) autoUpdater.quitAndInstall()
	})
});
