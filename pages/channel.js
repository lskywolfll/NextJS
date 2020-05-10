import React, { Component } from 'react'
import 'isomorphic-unfetch';

class channel extends Component {
    render() {
        const { channel, audio_clips } = this.props
        const { title } = channel;

        return (
            <div>
                <header>Podcasts</header>

                <h1>{title}</h1>

                {audio_clips.map(({title}) => (
                    <div>{title}</div>
                ))}

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

                       h1 {
                           font-weight: 600;
                           padding: 15px;
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

export async function getServerSideProps({ query }) {
    const idChannel = query.id;

    const responseChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
    const dataChannel = await responseChannel.json();

    const responseAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`);
    const dataAudios = await responseAudios.json();

    const { audio_clips } = dataAudios.body;
    const { channel } = dataChannel.body;

    return {
        props: {
            channel,
            audio_clips
        },
    }
}

export default channel