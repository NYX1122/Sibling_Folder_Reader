import fs from 'fs/promises';

export default async function () {
  try {
    const entries = await fs.readdir('../', { withFileTypes: true });
    const directories = entries
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
    console.log(
      'Sibling_Folder_Reader successfully read the following directories:'
    );
    console.log(directories);
    return directories;
  } catch (err) {
    console.error('Error reading directory:', err);
    return []; // Return an empty array in case of an error
  }
}
