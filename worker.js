const {Worker, isMainThread, parentPort, workerData} = require("worker_threads")
var fs = require("fs")
//var { talk } = require("./helper")
const path = require('path');

const listFD = (dirpath) => {
    const filesDir = fs.readdirSync(dirpath);
    
    filesDir.forEach((file) => {
        console.log(file)
        const epath = path.join(dirpath, file);
        const stats = fs.statSync(epath);

        if (stats.isDirectory()) {
            console.log('Dossier :', epath);
            listFD(epath);
        }
        else {
            console.log('Fichier :', epath);
        }
    })
}


//const pathdir = "C:/Users/guillaume-carolane/Desktop/Node/npm"

// listFD(pathdir)


if (isMainThread) {

  const worker = new Worker(__filename);

  worker.on('message', (message) => {
      console.log(message);
  });
} else {
    const pathdir = "C:/Users/guillaume-carolane/Desktop/Node/npm";
    parentPort.postMessage(listFD(pathdir));
}