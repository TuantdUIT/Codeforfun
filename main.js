const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 620,
    height: 680,
    resizable: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'heart.ico'),
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
