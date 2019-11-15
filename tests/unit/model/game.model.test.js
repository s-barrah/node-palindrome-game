import chai from 'chai';

import GameModel from '../../../src/models/Game.model';

const expect = chai.expect;

const gameMock = require('../../mocks/valid.mock.json');

describe('models/Game.model', () => {

  describe('Ensure setting and getting of variables', () => {
    const entity = {
      name: gameMock.name,
      word: gameMock.word,
      points: (gameMock.word).length,
    };

    const gameModel = new GameModel(entity);

    it('should get the name of player correctly', () => {
      expect(gameModel.name).to.eql(gameMock.name);
    });

    it('should get the players word correctly', () => {
      expect(gameModel.word).to.eql(gameMock.word);
    });

    it('should get the players points correctly', () => {
      expect(gameModel.points).to.eql((gameMock.word).length);
    });


  });

})
