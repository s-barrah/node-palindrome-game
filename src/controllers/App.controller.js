import fs from 'fs';

import DataHandlerService from '../services/DataHandler.service';

import { palindrome } from '../lib/Utils';

const filePath = `${__dirname}/../../outputs/tmp/data.json`;

export default class AppController {

  constructor() {
    this.file = filePath;
  }
  /**
   * Submit Entry function
   * @param req
   * @param res
   * @param next
   */
  submitEntry(req, res, next) {
    let message;
    const { name, word } = req.body;
    if (name && word) {
      if (palindrome(word)) {

        const entry = AppController.getEntryParams(name, word);
        const storage = [entry];

        const dataHandlerService = new DataHandlerService();
        const results = dataHandlerService.readFilesFromOutput('data.json');

        if (results) {
          storage.push(...results) ;
        }
        try {
          dataHandlerService.writeFilesToOutput('data.json', storage);
          res.send('Entry submitted');
        } catch (e) {
          return next(e);
        }
      } else {
        res.status(400).send('Word is not a palindrome!');
      }
    } else {
      res.status(400).send('Required values are missing!');
    }

  }

  /**
   * Get Scores function
   * @param req
   * @param res
   * @param next
   */
  getScores(req, res, next) {
    const dataHandlerService = new DataHandlerService();
    try {
      const results = dataHandlerService.readFilesFromOutput('data.json');
      res.send(results);

    } catch(err) {
      console.error(err);
      return next(err);
    }
  }


  static getEntryParams(name, word) {
    const entry = {};
    if (name) {
      entry.name = name;
    }
    if (word) {
      entry.word = word;
      entry.points = (word).length;
    }

    return entry;
  }


}
