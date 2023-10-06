import { exec } from "child_process";

export default class ReadScriptService {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  read(filePath: string, callback) {
    // Escape the file path to handle special characters properly
    const escapedFilePath = filePath.replace(/'/g, "\\'");

    // Construct the Bash command to read the file
    const command = `${this.path} ${escapedFilePath}`;

    // Execute the Bash command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        callback(error, null);
        return;
      }

      if (stderr) {
        callback(new Error(stderr), null);
        return;
      }

      // If there are no errors, pass the file content to the callback
      callback(null, stdout);
    });
  }
}
