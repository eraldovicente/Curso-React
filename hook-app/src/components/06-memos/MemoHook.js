<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02 - useEffect/effects.css';

export const MemoHook = () => {

     const { counter, increment } = useCounter( 5000 );
     const [ show, setShow ] = useState(true);

     const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

     return (
          <div>
               <h1>MemoHook</h1>
               <h3>Counter: <small>{ counter }</small> </h3>
               <hr/>

               <p> { memoProcesoPesado } </p>

=======
import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import '../02 - useEffect/effects.css';

export const Memorize = () => {

     const { counter, increment } = useCounter( 10 );
     const [ show, setShow ] = useState(true);

     return (
          <div>
               <h1>Counter: <Small value={ counter } /> </h1>
               <hr/>

>>>>>>> b0c6ca66399d5abea8bab0a3b1d451d926d17278
               <button
                    className="btn btn-primary"
                    onClick={ increment }
               >
                    +1
               </button>

               <button
                    className="btn btn-outline-primary ml-3"
                    onClick={ () => {
                         setShow( !show );
                    }}
               >
                    Show/Hide { JSON.stringify( show ) }
               </button>
          </div>
     )
}
