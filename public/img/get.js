const fs = require("fs");
const path = require("path");

function getDirectories(srcPath) {
  return fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

// 使用示例
const targetDir = "./赤壁之战/场景"; // 要扫描的目录路径
const dirNames = getDirectories(targetDir);

// 保存为 JSON 文件
const outputPath = path.join(__dirname, "folders.json");
fs.writeFileSync(outputPath, JSON.stringify(dirNames, null, 2), "utf8");

console.log(` 已生成: ${outputPath}`);
