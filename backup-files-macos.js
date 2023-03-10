const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Define the source and destination folders for the backup
// const sourceFolder = process.env.SOURCE_FOLDER || '/Users/your-username/Desktop/my-folder';
// const backupFolder = process.env.BACKUP_FOLDER || '/Users/your-username/Backups/my-folder';
const sourceFolder = process.argv[2] || '/Users/your-username/Desktop/my-folder';
const backupFolder = process.argv[3] || '/Users/your-username/Backups/my-folder';
// const sourceFolder = '/Users/your-username/Desktop/my-folder';
// const backupFolder = '/Users/your-username/Backups/my-folder';
// Create the backup folder if it doesn't already exist
if (!fs.existsSync(backupFolder)) {
  fs.mkdirSync(backupFolder, { recursive: true });
}

// Get the list of files in the source folder
fs.readdir(sourceFolder, (err, files) => {
  if (err) throw err;

  // Loop through the files and copy them to the backup folder
  files.forEach(file => {
    const sourcePath = path.join(sourceFolder, file);
    const backupPath = path.join(backupFolder, file);

    fs.copyFile(sourcePath, backupPath, err => {
      if (err) throw err;
      console.log(`Backed up ${sourcePath} to ${backupPath}`);
    });
  });

  // Show a message when the backup is complete
  console.log(`Backup of ${sourceFolder} is complete.`);

  // Open the backup folder in Finder
  exec(`open ${backupFolder}`);
});


// running through cli example with node:
// node backup-files-macos.js '/Users/username/someFolder/sourceFolder' '/Users/username/someFolder/backupFolder'
// and this will copy the source content to the backup path
