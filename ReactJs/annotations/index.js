/*
React Js
A versão React utilizada nesse curso é de 2022, portanto, 
está bem antiga.

Componentes

Componentes são escritos como funções e o retorno dessas
funções é o HTML.
Quando trabalhamos com JSX não podemos retornar mais de 1
elemento na mesma hierarquia. Só podemos retornar um 
elemento que envolva outros elementos. Comumente a div é
usada e dentro dela, colocamos outros elementos.
Outro tipo muito utilizado é um fragmento (<></>)

Exemplo:

const App = () => {

    return(
        <div>
            <h1></h1>
        </div>
    )
}
export default App;

Class Fields
São propriedades definidas diretamente no corpo de uma 
classe, fora de qualquer método como o constructor.
Elas permitem declarar e inicializar atributos de
instância de maneira mais simples e clara.

Um padrão no react é utilizar a nomenclatura "handle" 
quando utilizamos manipuladores de eventos (Ex: onChange);

componentDidUpdate 
É um método do ciclo de vida de componentes de classe no 
React.
Ele é chamado logo depois de o componente ser utilizado,
ou seja:
- Depois que o render() for chamado novamente.
- E depois que o DOM for atualizado.

Acontece, por exemplo, quando:
- o state muda via this.setState()
- ou as props recebidas pelo componente mudam

componentDidMount 
É um método do ciclo de vida de componentes de classe no 
React.
Ele é chamado automaticamente pelo React assim que o 
componente é montado na tela (DOM), ou seja, logo depois 
que o render() é executado pela primeira vez e o componente 
aparece para o usuário.

React Hooks
Manipulação de estados.
*/
