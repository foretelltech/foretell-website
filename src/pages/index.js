import React, { useState } from "react"
import styled from 'styled-components'
import HeaderSection from '../components/landing/headerSection'
import Layout from "../components/common/layout"
import DescriptionSection from "../components/landing/descriptionSection"
import HowWeDoIt from "../components/landing/howWeDoIt"
import ScrenshotSection from "../components/landing/screenshotSection"
import Footer from "../components/common/footer"
import Spinner from "../components/common/spinner"

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
