import React from 'react'

import './css/IWMPage.css';

function IWMPage() {
  return (
    <section className='IWM_project'>
        <h1>Imperial War Museum Game Jam</h1>

        <p>
            <b>
                Platform: Windows <br/>
                Technology: Unity, Visual Studio 2019, GitHub <br/>
                Year: 2019 <br/>
                Team Size: 2 <br/>
                Game Jam Length: 2 days <br/>
                Source Code: &nbsp;
            </b>
            <a href="https://github.com/imeqquinox/IWM-Jam">GitHub</a>
        </p>

        <p>
            The theme of the game jam was set by the Imperial War Museum (IWM) based in Duxford, 
            the aim of the game was to demonstrate real world applications of STEM subjects through the IWM collection.
        </p>
        <p>
            This was to be targeted at 11-14 year olds, conveying strong 70s aesthetic and providing an engaging and enjoyable experience.
        </p>
        <p>
            The focus of this project was to aim for a single player civilization style game, where the player had to complete missions while 
            keeping the overall threat level low. This would involve resource management, probability and risk taking.
        </p>
    </section>
  )
}

export default IWMPage