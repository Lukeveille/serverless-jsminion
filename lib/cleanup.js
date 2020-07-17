import enterBuyPhase from './enterBuyPhase';
import hasType from '../util/hasType';

export default turnObject => {
  if (!turnObject.actions || !hasType(turnObject.hand, 'Action')) {
    [turnObject.logs, turnObject.phase, turnObject.actions] = enterBuyPhase(turnObject.gameState, turnObject.logs);
  };
  return {...turnObject, discardTrashQueue: [], discardTrashState: false};
};
