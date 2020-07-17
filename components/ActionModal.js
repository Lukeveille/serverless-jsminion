import React from 'react';
import capital from '../util/capital';
import CardDisplay from './CardDisplay';

export default props => {
  return <div>
    <CardDisplay
      altKey={props.altKey}
      onClick={props.accept}
      cards={props.cards}
      live={props.live}
      title={props.title}
      modal={true}
    />
    <div
      className="game-button start-button live"
      onClick={props.decline}
    >
      {capital(props.buttonText)}
    </div>
  </div>
};
