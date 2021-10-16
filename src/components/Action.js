import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="big-button"
            disabled={!props.hasOptions} 
            onClick={props.pickRandomOption}
        >
            What should I do?
        </button>
    </div>
);

export default Action;