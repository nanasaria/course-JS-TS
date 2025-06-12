/*
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

*/
