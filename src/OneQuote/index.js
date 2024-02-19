import React, {useState} from 'react';
import Quote from '../Quote';
import {getNextQuote } from '../Data/data.js';

function OneQuote() {
    const [quote, setQuote] = useState(getNextQuote(3))

    if (!quote) {
        return (
            <>
                Pas de citation !!
            </>
        )
    }
    return (
        <div className="App">
            <h3>
                La citation courante
            </h3>
            <div className="App">
                <Quote {...quote}/> {/* Envoie tout le tableau */}
            </div>
        </div>
    );
}

export default OneQuote;