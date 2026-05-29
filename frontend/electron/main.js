import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isMac = process.platform === "darwin";
const preloadPath = path.join(__dirname, "preload.js");
let mainWindow;

function createWindow() {
  console.log("\nInitializing window");

  mainWindow = new BrowserWindow({
    frame: false, // fully windowless
    titleBarStyle: isMac ? "hiddenInset" : undefined,
    trafficLightPosition: isMac ? { x: 16, y: 20 } : undefined,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    },
  });

  mainWindow.webContents.on("preload-error", (event, preloadPath, error) => {
    console.error("PRELOAD ERROR:", preloadPath, error);
  });

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.maximize();
    mainWindow.show();
  });

  const isDev = process.env.NODE_ENV !== "production";
  const devUrl = process.env.VITE_DEV_SERVER_URL || "http://localhost:5173";

  if (isDev) {
    mainWindow.loadURL(devUrl);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

// title bar functionality
ipcMain.on("window:minimize", () => {
  console.log("minimizing");
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on("window:maximize", () => {
  console.log("maximizing");
  if (!mainWindow) return;
  if (mainWindow.isMaximized()) mainWindow.unmaximize();
  else mainWindow.maximize();
});

ipcMain.on("window:close", () => {
  if (mainWindow) mainWindow.close();
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});