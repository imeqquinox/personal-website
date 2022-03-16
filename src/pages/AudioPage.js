import React from 'react';

import ImageSlider from '../components/ImageSlider';

import Audio1 from '../assets/audio1.PNG';
import Audio2 from '../assets/audio2.PNG';
import Audio3 from '../assets/audio3.PNG';
import Audio4 from '../assets/audio4.PNG';

function AudioPage() {
  const images = [Audio1, Audio2, Audio3, Audio4];
 
  return (
    <section className='page_container'>
        <h1>Audio Programming</h1>

        <div className='iframe_container'>
            <iframe className='responsive_frame' src="https://www.youtube.com/embed/Se1pQrdtRyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='audio_info'>
            <p>
                <b>
                    Platform: Windows <br/>
                    Technology: Unity, Visual Studio 2017, Wwise, HeavyCompiler, Google Resonance <br/>
                    Year: 2019 <br/>
                    Grade: A+ <br/>
                </b>
            </p>

            <p><strong>I am not an audio designer, so sounds recorded and designed by me may sound awful</strong></p>

            <p>
                The Unity application demonstrating variety of audio techniques includes: 
                <ul>
                    <li>Recorded &amp; edited audio</li>
                    <li>Wwise - middleware</li>
                    <li>Audio effects</li>
                    <li>Synthesis</li>
                    <li>Dynamic audio</li>
                    <li>Spatial audio</li>
                    <li>Wwise plugins via HeavyCompiler</li>
                </ul>
            </p>

            <ImageSlider images={images} alt="Audio Programming Screenshot"/>

            <p>
                Wwise was chosen instead of Unity’s default audio due to the capabilities Wwise has. 
                This includes dynamic audio with random containers, builtin audio effects, RTPC variables and facility for plugins.
            </p>
            <p>
                For dynamic audio in Unity, colliers were setup in certain areas for the use of footsteps and ambient audio.
                With footsteps each having a random container of 5-6 footsteps sounds on different materials.
            </p>
            <p>
                The synthesizer effects were original made in Pure Data then exported as Wwise plugins through HeavyCompiler,
                variables of the different synths could be altered via RTPC values, with also a basic MIDI via the keyboard.
            </p>

            {/* Image and text here */}

            <p>
                Project also covers spatialized audio through Google Resonance this was primary used for footsteps and gunshots 
                within different environment, but also certain ambient sounds.
            </p>
            <p>
                Environments included: warehouse, medium wooden shed, and small bathroom.
                Spatialized audio was first fed into Wwise with the Google Resonance effects and audio bus. 
                In Unity the Resonance script would then specify the required audio bus, room materials, and reverb properties.
            </p>
        </div>
    </section>
  )
}

export default AudioPage