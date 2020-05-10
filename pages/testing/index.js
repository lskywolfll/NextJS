export class index extends React.Component {
    render() {
        return (
            <div>

                <img src="/static/platzi-logo.png" alt="platzi" />

                <h1>Desde el otro lugar</h1>
                <p>Pagina testing</p>

                <style jsx>
                    {`
                        div {
                            text-align: center;
                        }

                        h1 {
                            color: white;
                        }

                        p {
                            color: white;
                        }

                        img {
                            margin-top: 10%;
                            max-width: 10%;
                            display: block;
                            margin: 10% auto auto auto;
                        }

                        :global(body){
                            background-color: #192b34;
                        }
                    `}
                </style>
            </div>

            // Estilos unicos en este componente y en ningun otro lugar mas

        )
    }
}

export default index
