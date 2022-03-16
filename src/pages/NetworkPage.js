import React from 'react';

import './css/NetworkPage.css';
import ImageSlider from '../components/ImageSlider';

import Network1 from '../assets/network1.PNG';
import Network2 from '../assets/network2.PNG';

function NetworkPage() {
  const images = [Network1, Network2];

  return (
    <section className='network_project'>
        <h1>Networking Systems for Game Development</h1>

        <ImageSlider images={images} alt='Networking Screenshot'/>

        <p>
            <b>
                Platform: Windows <br/>
                Technology: SFML, Visual Studio 2017 <br/>
                Year: 2018 <br/>
                Grade: B <br/>
                Source Code: &nbsp;
            </b>
            <a href="https://github.com/imeqquinox/Networking">GitHub</a>
        </p>

        <p>
            Simple SFML application with a server with multiple clients, where player can move 
            around see to dodge the balls.
        </p>
        <p>
            Server has basic lobby where it blocks anyone from starting until at least 2 clients have joined the server. 
            Will read player data if the socket is ready to read from, the server application also makes use of non-blocking I/O.
        </p>
        <p>
            Clients have WASD input controls to move around to try and dodge the balls as well as the other players.
        </p>
        <h4>Discussion &amp; Evaluation</h4>
        <p>
            Application makes use of TCP, this is used to confirmed the initialization of the game however, 
            for the main loop of the application UDP could of been used instead of TCP. Also, server is not flexible in expanding or removing of players.
        </p>
        <p>
            Could of added more basic gameplay elements to make it an actual game: collision, points, lives, interface etc.
        </p>
        <p>
            While prediction wasn’t implemented the concept would consist of the application storing each player’s past values for position
            and game time of a client. Will then calculate the future position of the player via the direction it is heading in, with interpolation.
        </p>
    </section>
  )
}

export default NetworkPage