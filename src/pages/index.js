import React, { useState } from "react"
import styled from 'styled-components'
import HeaderSection from '../components/landing/HeaderSection'
import Layout from "../components/common/Layout"
import DescriptionSection from "../components/landing/DescriptionSection"
import HowWeDoIt from "../components/landing/HowWeDoIt"
import ScrenshotSection from "../components/landing/ScreenshotSection"
import Footer from "../components/common/Footer"
import Spinner from "../components/common/Spinner"

const Background = styled.div`
  padding-bottom:150px;
  width: 100vw;
  background-image: linear-gradient(to top, #262468, #070927);
`

const Content = styled.div`
`

const SpinnerWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`

const IndexPage = () => { 
  return (<div>
    <Background>
      <Layout>
        <Content>
          <HeaderSection/>
          <DescriptionSection/>
          <HowWeDoIt/>
          <ScrenshotSection/>
        </Content>
      </Layout>
    </Background>
    <Footer/>
  </div>)
}

export default IndexPage
