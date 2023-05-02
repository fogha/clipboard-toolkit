import { MessageData } from "types";
import { PortNameEnum, SourceEnum } from "../constants";

const openTroyTabsIDs: number[] = [];

function setupContentscriptMessageListener(port: chrome.runtime.Port) {
  port.onMessage.addListener(({ source, payload }: MessageData) => {
    if (source !== SourceEnum.CONTENTSCRIPT) return;

    if (!payload.type) throw new Error("type is required");

    if (payload.type === "LOGIN") {
      if (!port.sender?.tab?.id) return;
      if (openTroyTabsIDs.includes(port.sender?.tab?.id)) return;

      chrome.windows.create({
        focused: true,
        url: "index.html",
        type: "popup",
        top: 0,
        left: payload.SCREEN_WIDTH - 300,
        width: 360,
        height: 600,
      });

      openTroyTabsIDs.push(port.sender?.tab?.id);
    }
  });

  port.onDisconnect.addListener((port) => {
    if (!port.sender?.tab?.id) return;
    openTroyTabsIDs.splice(openTroyTabsIDs.indexOf(port.sender.tab.id), 1);
  });
}

chrome.runtime.onConnect.addListener((port) => {
  if (port.name === PortNameEnum.CONTENTSCRIPT) {
    setupContentscriptMessageListener(port);
  }
});
