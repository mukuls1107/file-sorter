# File Sorter

Organize your files according to their file extension based folders

## Description

File Sorter is a Node.js script that automatically organizes files in a directory by sorting them into subdirectories based on their file extensions. This tool helps keep your files neatly organized and easy to find.

## Features

- Scans the current directory for files
- Creates subdirectories for each unique file extension
- Moves files into their corresponding extension-based subdirectories
- Preserves original filenames
- Skips specific files (package.json, package-lock.json, and work.js)

## Preview
![](file-sort.mp4)

## Requirements

- Node.js
- fs-extra package

## Installation

1. Clone this repository or download the script.
2. Navigate to the project directory.
3. Install the required package: `npm install`


## Usage

1. Place the script in the directory you want to organize.
2. Run the script: `npm start`

The script will automatically create subdirectories for each file extension and move the files accordingly.

## How it works

1. The script reads all files in the current directory.
2. For each file (excluding package.json, package-lock.json, and work.js):
   - It determines the file extension.
   - Creates a subdirectory named after the extension if it doesn't exist.
   - Moves the file into the corresponding subdirectory.

## Notes

- The script will not move files named package.json, package-lock.json, or work.js.
- If a subdirectory for a particular extension already exists, the script will use it.
- In case of any errors during the process, they will be logged to the console.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a PR if you want to contribute.

## License

