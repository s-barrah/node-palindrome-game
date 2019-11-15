
import { palindrome } from '../lib/Utils';

export default class AppController {

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
        req.context.models.GameModel.create(entry, (err) => {
          if(err) {
            return next(err);
          }
          res.send('Entry submitted');
        });
      } else {
        res.send('Word is not a palindrome');
      }
    } else {
      res.send('Required values are missing!');
    }

  }

  /**
   * Get Scores function
   * @param req
   * @param res
   * @param next
   */
  getScores(req, res, next) {
    req.context.models.GameModel
      .find().lean()
      .limit(5)
      .sort({ 'points': -1 })
      .then((results) => {
        if (results && results.length > 0) {
          res.send(results);
        } else {
          res.send('No records!');
        }
      })
      .catch((error) => {
        console.log(error);
        next(error);
      });
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
