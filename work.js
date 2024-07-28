const fs = require('fs-extra');
const path = require('path')
const myDir = __dirname

fs.readdir(myDir, (error, files) => {
    if (error) throw error;

    files.forEach(file => {
        if(file !== 'package.json' && file !== 'package-lock.json' && file !== 'work.js'){
        //Get extensions of each file
        const extension = path.extname(file);
        const destinationFolder = path.join(myDir, extension);

        //source = file in base folder, tagret = file in proper folder
        const sourceFile = path.join(myDir, file)
        const targetFile = path.join(destinationFolder, file)


        function moveFile(sourceFile, targetFile){
            console.log('file moved');
                fs.move(sourceFile, targetFile, (err) => {
                    err ? console.error('Error moving file:', err) : console.log('Folder created')
                })
        }

        //Checking if directory exist
        if (fs.existsSync(destinationFolder)) {
            moveFile(sourceFile, targetFile)
        }else{
            //Creates directory if it does not exists
            fs.ensureDir(destinationFolder, (err) => {
                err ? console.error('Error moving file:', err) : console.log('Folder created')
            })

            moveFile(sourceFile, targetFile)
        }
    }
    })
})