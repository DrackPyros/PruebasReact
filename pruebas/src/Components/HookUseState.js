import { useState, useEffect } from "react";

export default function PUseState () {
    const [ semaforo, setSemaforo ] = useState(false);

    useEffect(() => { //Se llama cada vez que cambia la variable
      console.log(semaforo);
    }, [semaforo])
    

    const accion = () => {
        setSemaforo(!semaforo);
    }

    return (
        <div>
            <h4>{semaforo}</h4>
            <button type="submit" onClick={accion}>
                {semaforo ? 'Semaforo' : "Semaforon't"}
            </button>
        </div>
    )


}