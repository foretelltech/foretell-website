import React from "react"
import styled from 'styled-components'
import HeaderSection from '../components/landing/headerSection'
import AppContainer from "../components/common/appContainer"
import NavigationBar from "../components/common/NavigationBar"
import DescriptionSection from "../components/landing/descriptionSection"
import HowWeDoIt from "../components/landing/howWeDoIt"
import ScrenshotSection from "../components/landing/screenshotSection"
import Footer from "../components/common/footer"
import landingGrahpics from '../assets/landing-graphics.svg'

const Background = styled.div`
  padding-bottom:150px;
  width: 100vw;
  background-image: linear-gradient(to top, #262468 , #0A0A28);
`

const BackgroundGraphics = styled.div`
  background-image: url(${landingGrahpics});
  background-size:100% 100%;
  background-position: 70% 96%;
  background-size: cover;
  padding-bottom: 100px;
`

const Wrapper = styled.div`
  font-family: 'Mont', sans-serif;
`

const Curve = styled.div`
  width:100vw;
  left:0;
  position:absolute;

`

const IndexPage = () => { 
  return (<Wrapper>
    <BackgroundGraphics>
      <AppContainer>
        <NavigationBar/>
      </AppContainer>
      <HeaderSection/>
    </BackgroundGraphics>
    <Background>
      <AppContainer>
        <div>
          <DescriptionSection/>
          <HowWeDoIt/>
          <ScrenshotSection/>
        </div>
      </AppContainer>
    </Background>
    <Footer/>
  </Wrapper>)
}

export default IndexPage
