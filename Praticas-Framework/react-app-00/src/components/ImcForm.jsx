import { useState } from "react";

export default function ImcForm() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)
    
    const calcularImc = (evento) => {
        evento.preventDefault();
        setImc(peso / (altura * altura).toFixed(2));
    }
    return(
        <>
            <h1>IMC</h1>
            <p>Informe seus dados no formulario abaixo</p>

            <form onSubmit={calcularImc}>
                <label htmlFor="altura"></label>
                <input type="number"
                id='peso'
                placeholder='Sua altura'
                step={0.01}
                min={0}
                value={altura}
                onChange={(e) => setAltura(e.target.value)} />


                <label htmlFor="peso"></label>
                <input type="number"
                id='peso'
                placeholder='Seu peso em KG'
                step={0.01}
                min={0}
                value={peso}
                onChange={(e) => setPeso(e.target.value)} />

                <button>Calcular</button>

                {/** renderização condicional: só exibe o resultado se o imc for maior que 0
                 * perceba que usamos chaves {} para inserir código JavaScript dentro do JSX
                 */}
                {imc > 0 && (
                <div className='resultado'>
                    <h2>Seu IMC é de {imc}</h2>
                </div>
                )}
                
            </form>    
        </>
    );
};
