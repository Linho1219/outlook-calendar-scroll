import pkg from "./package.json";

const repoURL = "https://github.com/Linho1219/outlook-calendar-scroll";

const metadataObject: Metadata = {
  name: "Outlook Calendar Scroll",
  namespace: "https://github.com/Linho1219",
  version: pkg.version,
  description: "Scroll to switch calendar months in Outlook PWA",
  author: "Linho1219",
  match: [
    "https://outlook.live.com/*",
    "https://outlook.office.com/*",
    "https://outlook.office365.com/*",
    "https://outlook.cloud.microsoft/*",
  ],
  grant: "none",
  "run-at": "document-end",

  "name:zh-CN": "Outlook 日历滚动增强脚本",
  "description:zh-CN": "通过滚动切换 Outlook PWA 中的日历月份",

  homepage: repoURL,
  supportURL: `${repoURL}/issues`,
  updateURL: `${repoURL}/releases/latest/download/outlook-calendar-scroll.user.js`,
  downloadURL: `${repoURL}/releases/latest/download/outlook-calendar-scroll.user.js`,
  icon: "https://outlook.live.com/favicon.ico",

  license: "MIT",
};

interface Metadata {
  [key: string]: string | string[];
}

function generateMetadataStr(metadata: Metadata): string {
  const keyLength = Math.max(...Object.keys(metadata).map((k) => k.length));
  const lines = Object.entries(metadata).flatMap(([key, value]) => {
    const paddedKey = key.padEnd(keyLength);
    if (!Array.isArray(value)) value = [value];
    return value.map((value) => `// @${paddedKey}  ${value}`);
  });
  lines.unshift("// ==UserScript==");
  lines.push("// ==/UserScript==");
  return lines.join("\n");
}

export const metadata = generateMetadataStr(metadataObject);
