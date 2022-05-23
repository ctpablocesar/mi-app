import { Timer } from "./Timer"
import { useState, useEffect } from 'react';

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <>

            <h1>useEffect - UseRef</h1>
            <hr />

            <span>Milisegundos {milisegundos} </span>
            <br />
            <button
                onClick={() => setMilisegundos(1000)}
                className="btn btn-outline-success mt-2"
            >
                1000
            </button>

            <button
                onClick={() => setMilisegundos(2000)}
                className="btn btn-outline-success mt-2"
            >
                2000
            </button>

            <Timer milisegundos={milisegundos} />
        </>
    )
}
