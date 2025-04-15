import style from './Media.module.css';
import { useState } from 'react';

export default function Imc() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resIMC, setResImc] = useState(0);

    const IMC = () => setResImc(parseFloat(n1) / (parseFloat(n2) * parseFloat(n2)));

    return (
        <>
            <a href="/" className={style.backbtn}>Voltar</a>
            <h1>Calculadora de IMC</h1>
            <div>
                <h4>Adicione o Peso e Altura</h4>
                <input
                    type="number"
                    value={n1}
                    onChange={(e) => setN1(e.target.value)}
                    placeholder="Peso"
                />
                <input
                    type="number"
                    value={n2}
                    onChange={(e) => setN2(e.target.value)}
                    placeholder="Altura"
                />
            </div>
            <div>
                <h1>IMC:</h1>
                <p>
                    <button onClick={IMC}>Calcular IMC</button>
                    Resultado: {isNaN(resIMC)
                        ? "Digite números válidos"
                        : resIMC < 18.5
                        ? "Abaixo do Peso"
                        : resIMC >= 18.5 && resIMC <= 24.9
                        ? "Peso Normal"
                        : resIMC >= 25 && resIMC <= 29.9
                        ? "Sobrepeso"
                        : resIMC >= 30
                        ? "Obesidade"
                        : "Erro"}
                </p>
            </div>
        </>
    );
}