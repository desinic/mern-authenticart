import React, {useState, useEffect} from 'react'
import creative from "../../../images/icons/clients.webp"
import user from "../../../images/icons/user.webp"
import atchievement from "../../../images/icons/atchivement.webp"
import axios from "axios";
import './Services.css'

const Services = () => {
  const [ servicesDesc1, setServicesDesc1 ] = useState('')
  const [ servicesDesc2, setServicesDesc2 ] = useState('')
  const [ servicesDesc3, setServicesDesc3 ] = useState('')
  
    const services = async () => {
        const services = await axios.get( '/api/v1/services' )
        const services1 = services.data.servicesDescs[ 0 ].services
        const services2 = services.data.servicesDescs[ 1 ].services
        const services3 = services.data.servicesDescs[ 2 ].services
      setServicesDesc1(services1)
      setServicesDesc2(services2)
      setServicesDesc3( services3 )
    }
  useEffect( () => {
      services()
  })
  return (
    <div className="services">
      <h2 className="productsHeading">Services</h2>
      <div className="servicesCard">
          <div>
            <img src={creative} alt="" />
            <h2>We are Creative</h2>
            <p>{servicesDesc1}</p>
          </div>
          <div>
            <img src={user} alt="" />
            <h2>On Time Submission</h2>
            <p>{servicesDesc2}</p>
          </div>
          <div>
            <img src={atchievement} alt="" />
            <h2>Top Quality</h2>
            <p>{servicesDesc3}</p>
          </div>
      </div>
    </div>
  )
}

export default Services