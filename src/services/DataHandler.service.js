import jsonfile from 'jsonfile';

export default class DataHandlerService {

  sortData(data) {
    return data.sort((a, b) => {
      return a.points < b.points ? 1 : -1;
    });
  }

  /**
   * Write Data to File
   * @param data object
   * @param fileName string
   */
  writeFilesToOutput(fileName, data) {

    const path = `${__dirname}/../../outputs/tmp/${fileName}`;
    const sorted = data.sort((a, b) => a.points < b.points ? 1 : -1);

    const highestScores = sorted.slice(0, 5);

    return jsonfile.writeFileSync(path, highestScores, { spaces: 2, EOL: '\r\n' });
  }

  /**
   * Function to read data from file
   * @param fileName
   * @return {*|void}
   */
  readFilesFromOutput(fileName) {
    const path = `${__dirname}/../../outputs/tmp/${fileName}`;
    return jsonfile.readFileSync(path);
  }
}
