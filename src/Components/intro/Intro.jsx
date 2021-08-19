import './intro.scss'
import Particles from 'react-particles-js';
import particlesConfig from '../particle/particlesConfig.json'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'
import {GitHub, LinkedIn, AssignmentInd} from '@material-ui/icons'


function Intro() {
    const titleRef = useRef()
    const descRef = useRef()

    useEffect(() => {
        init(titleRef.current, {
            typeSpeed: 40,
            showCursor: false,
            strings: ['Cornelius'],
            backDelay: 50000,
        })

        init(descRef.current, {
            typeSpeed: 40,
            showCursor: false,
            backDelay: 50000,
            strings: ['A Computer Science Student at Cornell University passionate about solving problems with efficient means! I like learning new stuff and writing code']
        })
    }, [])

    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt="" />
                    <p>An amazing picture is on its way</p>
                </div>

                <div className="itemContainer">
                    <a aria-label="false" target="_blank" tabIndex="0" rel="noopener noreferrer" href="https://www.linkedin.com/in/cornelius-boateng-29b5b01a5"><LinkedIn className="icon"/></a>
                    <a aria-label="false" target="_blank" tabIndex="0" rel="noopener noreferrer" href="https://github.com/CorneliusOsei2"><GitHub className="icon" /></a>
                    <a aria-label="false" target="_blank" tabIndex="0" rel="noopener noreferrer" href="https://www.linkedin.com/in/cornelius-boateng-29b5b01a5"><AssignmentInd className="icon" /></a>
                </div>
            </div>

            <div className="right">
                <Particles params={particlesConfig} className='particles-container'/>
                <div className="wrapper">
                    <h4>Hi there, I'm</h4>
                    <h2 ref={titleRef} ></h2>

                    <p ref={descRef}></p>
                    <p className="emoji">🧑🏾‍💻</p>

                </div>

                



            </div>
        </div>
    )
}

export default Intro
