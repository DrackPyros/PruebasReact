import { useState } from "react";

export default function PHooks () {
    const [contador, setContador ] = useState(0);

    const contar = () => {
        // console.log("Entrando en la función de contar");
        setContador(contador +1);
    }


    return ( // Pasar a varios componentes mediante Props
        <div>
            <h2>Contador de react con Hooks</h2>
            <h4>El número de contador es: {contador}</h4>
            {/* <button type="submit" onClick={() => setContador(contador +1)}> */}
            <button type="submit" onClick={contar}>
                Sumar Contador
            </button>
        </div>
    );
}