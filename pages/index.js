// React por defecto como es un modulo de dependencia podemos ejecutarlo sin necesidad de importarlo
export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola!</h1>
                <p>Bienvenidos</p>

                <img src="/static/platzi-logo.png" alt="platzi" />

                {/* Esto solo aplica para componente y no se aplicara a componentes internos o externos */}
                <style jsx>{`
                h1 {
                    color: red;
                }

                p {
                    color: green;
                }
                
                // Esto se usa para saltar el scope normal y hacer el estilo global
                :global(p){
                    color:green;
                }

                img {
                    max-width: 50%;
                    display: block;
                    margin: 0 auto;
                }
                // 
                // component :global(propierty css)
                // {
                //    property: value;
                // }
                // 
            `}</style>
            {/* Esta es una manera de romper la regla normal y hacerla global
                pero esto solo debe usarse cuando realmente sea necesario 

                Lo primero es ver con la primera regla normal del jsx style
            */}
            <style jsx global>{`
                body {
                    background: white;
                }
            `}</style>
            </div>
        )
    }
}