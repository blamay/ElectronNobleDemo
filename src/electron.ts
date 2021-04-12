const { app, BrowserWindow } = require("electron");

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
};

app.on("ready", createWindow);

// and load the index.html of the app.

console.log("loading index.html");

console.log("loading noble");

//   const macBindings = require("@abandonware/noble/lib/mac/bindings");
//   // const webbluetoothBindings = require("@abandonware/noble/lib/webbluetooth/bindings");
//   const Noble = require("@abandonware/noble/lib/noble");
//   const params = {
//     deviceId: 0,
//     userChannel: true,
//   };
//   const noble = new Noble(new macBindings(params));

//   noble.on("stateChange", async (state: any) => {
//     console.log(`noble stateChange`, state);
//     if (state === "poweredOn") {
//       console.log(`bluetooth is enabled, starting scanning`);
//       noble.startScanning(
//         ["0000180d-0000-1000-8000-00805f9b34fb"],
//         false,
//         (error: any) => {
//           console.log("Scanning error", error);
//         }
//       );
//     }
//   });

//   noble.on("discover", async (peripheral: any) => {
//     console.log(`found device`, peripheral);
//   });
