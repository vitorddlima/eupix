import style from './Media.module.css';
import { useState } from 'react';

export default function Media(){

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);
    const [resMedia, setResMedia] = useState(0);

    const Media = () => setResMedia((parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3);

    return(
        <>
        <a href="/" className={style.backbtn}>Voltar</a>
        <h1>Calculadora de Media</h1>
        <div>
            <h4>Adiciona as Suas medias</h4>
            <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Primeiro Media" />
            <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} placeholder="Segundo Media" />
            <input type="number" value={n3} onChange={(e) => setN3(e.target.value)} placeholder="Terceiro Media" />
            </div>

            <div>
                <h1>Total da Media:</h1>
            <p>
                <button onClick={Media}>Calcular total da Media</button>
                Resultado: {
                 resMedia >= 7.0 
                 ? "Aprovado" 
                 : "Reprovado"}


                </p>

            </div>

        </>
    )
    }