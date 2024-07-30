const path = require('path');

module.exports = {
  version: "2.0",
  title: "TabbyAPI",
  description: "A local-install LLM backend",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installingNvidia12 = info.running("install - NVIDIA Cuda 12.x.js");
    let installingNvidia11 = info.running("install - NVIDIA Cuda 11.8.js");
    let installingAMD = info.running("install - AMD.js");
    let installing = installingNvidia12 || installingNvidia11 || installingAMD;

    let installed = info.exists("app/env");
    let runningStart = info.running("start.js");
    let runningNoUpdate = info.running("start-no_update.js");
    let running = runningStart || runningNoUpdate;

    if (installing) {
      if (installingNvidia12) {
        return [{ default: false, icon: "fa-solid fa-plug", text: "Installing", href: "install - NVIDIA Cuda 12.x.js" }];
      } else if (installingNvidia11) {
        return [{ default: false, icon: "fa-solid fa-plug", text: "Installing", href: "install - NVIDIA Cuda 11.8.js" }];
      } else if (installingAMD) {
        return [{ default: false, icon: "fa-solid fa-plug", text: "Installing", href: "install - AMD.js" }];
      }
    } else if (installed) {
      let arr;
      if (running) {
        let local = runningStart ? info.local("start.js") : info.local("start-no_update.js");
        arr = [{ icon: "fa-solid fa-terminal", text: "Terminal", href: runningStart ? "start.js" : "start-no_update.js" }];
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: runningStart ? "start.js" : "start-no_update.js",
          }];
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: runningStart ? "start.js" : "start-no_update.js",
          }];
        }
      } else {
        arr = [
          { default: false, icon: "fa-solid fa-power-off", text: "Start", href: "start.js" },
          { default: false, icon: "fa-solid fa-power-off", text: "Start No Update", href: "start-no_update.js" }
        ];
        arr = arr.concat([{
          icon: "fa-solid fa-download",
          text: "Install",
          menu: [
            { text: "Install NVIDIA Cuda 12.x", icon: "fa-solid fa-plug", href: "install - NVIDIA Cuda 12.x.js", mode: "refresh" },
            { text: "Install NVIDIA Cuda 11.8", icon: "fa-solid fa-plug", href: "install - NVIDIA Cuda 11.8.js", mode: "refresh" },
            { text: "Install AMD", icon: "fa-solid fa-plug", href: "install - AMD.js", mode: "refresh" },
          ]
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]);
        return arr;
      }
    } else {
      return [
        { text: "Install NVIDIA Cuda 12.x", icon: "fa-solid fa-plug", href: "install - NVIDIA Cuda 12.x.js" },
        { text: "Install NVIDIA Cuda 11.8", icon: "fa-solid fa-plug", href: "install - NVIDIA Cuda 11.8.js" },
        { text: "Install AMD", icon: "fa-solid fa-plug", href: "install - AMD.js" }
      ];
    }
  }
};
