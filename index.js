var colors = require('colors')
var fs = require("fs")
//var { talk } = require("./helper")
const path = require('path');

// fs.readFile("./helper.js", "utf-8", (err, content) => {
//     if (err) console.log(err);

//     console.log(content)
// })

// fs.promises.readFile("./helper.js", "utf-8")
//     .then(res => {console.log(res);
//     })

//     C:\\Users\\guillaume-carolane\\Desktop\\Node\\npm

// console.log(fs.stat("C:/Users/guillaume-carolane/Desktop/Node/npm", (err, stats)) => {
//         if (error) { 
//     console.log(error); 
//   } 
//     else { 
//         console.log("Stats object for: example_file.txt"); 
//         console.log(stats); 
//         }
//         )})

// const listFile = (path) => fs.stat(path, (error, stats) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(stats);

//         // Using methods of the Stats object 
//         console.log("Path is file:", stats.isFile());
//         console.log("Path is directory:", stats.isDirectory());
//     }
// });


// fs.readdir("C:/Users/guillaume-carolane/Desktop/Node/npm", (err, files) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("\nCurrent directory filenames:");
//         files.forEach(file => {
//             console.log(file);
//         })
//     }
// })



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


const pathdir = "C:/Users/guillaume-carolane/Desktop/Node/npm"

listFD(pathdir)

