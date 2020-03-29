import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/layout'
import backgroundGraphics from '../assets/background.svg'
import WhoAreWe from '../components/aboutUs/whoAreWe'
import Footer from '../components/common/footer'
import Foretellians from '../components/aboutUs/foretellians'

const Background = styled.div`
  background-image: radial-gradient(circle at 60% 10%, #4742ac, #050824 50%);
  height: 770px;
`

const BackgroundGraphics = styled.div`
  background-image: url(${backgroundGraphics});
  height: 100%;
`

const AboutUs = () => {
  return (<Background>
    <BackgroundGraphics>
      <Layout>
        <WhoAreWe/>
      </Layout>
    </BackgroundGraphics>
    <Foretellians/>
    <Footer/>
  </Background>)
} 

export default AboutUs