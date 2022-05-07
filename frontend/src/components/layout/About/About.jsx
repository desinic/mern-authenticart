import React, {useState, useEffect} from 'react'
import pk from '../../../images/pk.jpg';
import { Link } from 'react-router-dom'
import clients from '../../../images/icons/clients.webp'
import projects from '../../../images/icons/projects.webp'
import atchivement from '../../../images/icons/atchivement.webp'
import axios from 'axios';
import './About.css'

const About = () => {
    const [aboutDesc, setAboutDesc] = useState('')
    const about = async () => {
        const about = await axios.get( '/api/v1/about' )
        const aboutD = about.data.aboutDescs[ 0 ].aboutDesc
        setAboutDesc(aboutD)
    }
    useEffect( () => {
        about()
    })
    return (
        <section className="about">
            <h2 className="productsHeading">About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <img src={pk} alt="" />
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <img src={atchivement} alt="" />
                            <h5>My Experiences</h5>
                            <small>5+ Years Working</small>
                        </article>
                        <article className="about-card">
                        <img src={clients} alt="" />
                            <h5>Clients</h5>
                            <small>250+ Worldwide</small>
                        </article>
                        <article className="about-card">
                        <img src={projects} alt="" />
                            <h5>Projects</h5>
                            <small>1k+ Completed</small>
                        </article>
                    </div>
                    <p>{aboutDesc}</p>
                    <Link to='/contact' className='btn-msg'>Let's Talk</Link>
                </div>
            </div>
        </section>
    )
}

export default About