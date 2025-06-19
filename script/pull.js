#!/usr/bin/env node
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const data = await fetch("https://kyfw.12306.cn/otn/resources/js/framework/station_name.js");
let dataStr = (await data.text()).match(/'([^']*)'/)[1];
dataStr = dataStr.slice(1);
dataStr = dataStr.replaceAll("|||", "");

await fs.writeFile(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/data.ts"),
    `export default "${dataStr}";`,
    "utf8"
);

console.log("数据拉取完成");
