import fs from "fs";
import path from "path";

const pagesDir = path.join(process.cwd(), "/public/pages");

export function getSortedPagesData() {
  // Get file names under /pages
  const fileNames = fs.readdirSync(pagesDir);
  const allPagesData = fileNames.map((fileName) => {
    const fullPath = path.join(pagesDir, fileName);

    return { projName: fileName, projPath: fullPath };
  });

  const allProjectData = allPagesData.map((projEntries) => {
    let currProjFiles = fs.readdirSync(projEntries.projPath);
    let currProjFilePaths = currProjFiles.map((filePath) => {
      return path.join("/pages/", projEntries.projName, filePath);
    });

    currProjFilePaths.sort((a, b) => {
      return a.localeCompare(b, "en", { numeric: true, sensitivity: "base" });
    });

    return { proj: projEntries.projName.split("_")[1], projPaths: currProjFilePaths };
  });

  return allProjectData;
}
