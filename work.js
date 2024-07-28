const fs = require('fs-extra');
const path = require('path');
const myDir = __dirname;

fs.readdir(myDir, (error, files) => {
    if (error) throw error;

    files.forEach(file => {
        if (file !== 'package.json' && file !== 'package-lock.json' && file !== 'work.js') {
            // Get extensions of each file
            const extension = path.extname(file);
            
            // If the file has no extension, skip it
            if (extension === '') {
                console.log(`Skipping file without extension: ${file}`);
                return;
            }

            const destinationFolder = path.join(myDir, extension);

            // source = file in base folder, target = file in proper folder
            const sourceFile = path.join(myDir, file);
            const targetFile = path.join(destinationFolder, file);

            // If the source and target are the same, skip this file
            if (sourceFile === targetFile) {
                console.log(`File ${file} is already in the correct folder. Skipping.`);
                return;
            }

            function moveFile(sourceFile, targetFile) {
                fs.move(sourceFile, targetFile, { overwrite: false }, (err) => {
                    if (err) {
                        if (err.code === 'EEXIST') {
                            console.error(`File already exists: ${targetFile}`);
                        } else {
                            console.error('Error moving file:', err);
                        }
                    } else {
                        console.log(`File moved: ${file} to ${extension} folder`);
                    }
                });
            }

            // Checking if directory exists
            fs.ensureDir(destinationFolder, (err) => {
                if (err) {
                    console.error('Error creating directory:', err);
                } else {
                    moveFile(sourceFile, targetFile);
                }
            });
        }
    });
});