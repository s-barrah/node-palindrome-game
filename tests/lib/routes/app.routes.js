import request from 'request-promise';

const BASE_URL = process.env.BASE_URL;


/**
 * AppRoute Class
 */
export default class AppRoute {


  /**
   * Get data from form
   * validate is palindrome
   * store to db
   * @return {Promise<any>}
   */
  static submitEntry(data = {}) {
    return new Promise((resolve, reject) => {
      request({
        method: 'POST',
        uri: BASE_URL + 'api/submitEntry',
        body: data,
        json: true,
      })
        .then((body) => resolve(body))
        .catch((error) => reject(error));
    });
  }

  /**
   * Get top 5 scores
   * from database
   * @return {Promise<any>}
   */
  static getScores() {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        uri: BASE_URL + 'api/getScores',
        json: true,
      })
        .then((body) => resolve(body))
        .catch((error) => reject(error));
    });
  }

}
