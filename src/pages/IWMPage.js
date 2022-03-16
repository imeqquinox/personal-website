import React from 'react'

import ImageSlider from '../components/ImageSlider';

import IWM1 from '../assets/IWM1.PNG';
import IWM2 from '../assets/IWM2.PNG';
import IWM3 from '../assets/IWM3.PNG';
import IWM4 from '../assets/IWM4.PNG';

function IWMPage() {
  const images = [IWM1, IWM2, IWM3, IWM4];

  return (
    <section className='page_container'>
        <h1>Imperial War Museum Game Jam</h1>

        <ImageSlider images={images} alt="IWM Screenshot"/>

        <div className='IWM_info'>
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
        </div>
    </section>
  )
}

export default IWMPage