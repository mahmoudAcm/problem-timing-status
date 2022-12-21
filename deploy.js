const copySync = require("@mahmoudacm/copy");
const child_process = require("child_process");

copySync("dist", "./");
child_process.execSync(`git add . && git commit -m ... && git push`);