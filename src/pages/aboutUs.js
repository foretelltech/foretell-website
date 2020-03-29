import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/common/layout'
import backgroundGraphics from '../assets/background.svg'
import WhoAreWe from '../components/aboutUs/whoAreWe'
import Footer from '../components/common/footer'
import Foretellians from '../components/aboutUs/foretellians'
import bcrypt from 'bcryptjs'

const Background = styled.div`
  background-image: radial-gradient(circle at 60% 10%, #4742ac, #050824 50%);
  height: 770px;
`

const BackgroundGraphics = styled.div`
  background-image: url(${backgroundGraphics});
  height: 100%;
`

const AboutUs = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    let password = localStorage.getItem('password') ? localStorage.getItem('password') : ''
    bcrypt.compare(password, '$2a$04$Z1jhtEnrfE9aEGi9PI.AvOSeqQZ4Ulh3zoCrY5DxazcsDZ6ktJ4sq', function (err, isValid) {
      if (!isValid){
        localStorage.setItem('redirectPage', 'aboutUs')
        window.location = '/auth?page=aboutUs'
      }
      else
        setIsAuthorized(true)
    })
  }, [])

  return (<div>
    {isAuthorized && <Background>
      <BackgroundGraphics>
        <Layout>
          <WhoAreWe />
        </Layout>
      </BackgroundGraphics>
      <Foretellians />
      <Footer />
    </Background>}
  </div>)
} 

export default AboutUs