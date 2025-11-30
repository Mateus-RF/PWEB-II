const props = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => {},
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar formulário"
};

function prepararPropsBotao(propriedades) {
  
    const { id, className, onClick, ...atributosNativos } = propriedades;

    const configuracaoPadrao = {
        id: "default-id",
        type: "button",
        disabled: false
    };

    const propsFinais = {
        ...configuracaoPadrao,
        ...atributosNativos,
        disabled: false
    };

    return propsFinais;
}

const resultado = prepararPropsBotao(props);
console.log(resultado);


/**
 * 
 * Como o Rest ajudou?
Durante o destructuring:
    const { id, className, onClick, ...atributosNativos } = propriedades;

id, className e onClick foram removidos do objeto original, todo o restante foi agrupado automaticamente dentro de atributosNativos.
Isso permite separar o que é lógica interna do botão do que será replicado no HTML.

Como o Spread garantiu a prioridade correta?
A ordem garante:
-configuracaoPadrao define valores base;

-atributosNativos sobrescreve quando necessário;

-disabled: false sobrescreve tudo no final;

Isso simula perfeitamente como os frameworks combinam props de componentes.
 */
