import 'isomorphic-unfetch';
import Link from 'next/link';

// React por defecto como es un modulo de dependencia podemos ejecutarlo sin necesidad de importarlo
export default class extends React.Component {

    // Inyecta a los props de este componente
    static async getInitialProps() {
        try {
            const response = await fetch('https://api.audioboom.com/channels/recommended');
            const { body: channels } = await response.json();

            return {
                channels
            };
        } catch (error) {
            return error;
        }
    }

    render() {

        const { channels } = this.props;

        return (
            <div>
                <header>Podcasts</header>
                <div className="channels">
                    {/* Parentesis con el map es para devolver algo */}
                    {channels.map(({ title, id, urls }) => (
                        <Link href="/channel" >
                            <div className="channel" key={id}>
                                <img src={urls.logo_image.original} alt="" />
                                <h2>{title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Esto solo aplica para componente y no se aplicara a componentes internos o externos */}
                <style jsx>
                    {`
                       header{
                           color: #fff;
                           background: #8756ca;
                           padding: 15px;
                           text-align: center;
                       }

                       .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                      }

                       .channel{
                           display: block;
                           border-radius: 3px;
                           box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                           margin-bottom: 0.5em;
                           cursor: pointer;
                       }

                       .channel img {
                           width: 100%;
                       }

                       h2 {
                           padding: 5px;
                           font-size: 0.9em;
                           font-weight: 600;
                           margin: 0;
                           text-align: center;
                       }
                    `}
                </style>
                {/* Esta es una manera de romper la regla normal y hacerla global
                pero esto solo debe usarse cuando realmente sea necesario 

                Lo primero es ver con la primera regla normal del jsx style
            */}
                <style jsx global>
                    {`
                        body{
                            margin: 0;
                            font-family: system-ui;
                            background: white;
                        }
                    `}
                </style>
            </div>
        )
    }
}