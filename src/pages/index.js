import React, { useState } from "react"
import styled from 'styled-components'
import HeaderSection from '../components/landing/headerSection'
import Layout from "../components/common/layout"
import DescriptionSection from "../components/landing/descriptionSection"
import HowWeDoIt from "../components/landing/howWeDoIt"
import ScrenshotSection from "../components/landing/screenshotSection"
import Footer from "../components/common/footer"

const Background = styled.div`
  padding-bottom:150px;
  width: 100vw;
  background-image: linear-gradient(to top, #262468, #070927);
`

const IndexPage = () => { 
  return (<div>
    <Background>
      <Layout>
        <div>
          <HeaderSection/>
          <DescriptionSection/>
          <HowWeDoIt/>
          <ScrenshotSection/>
        </div>
      </Layout>
    </Background>
    <Footer/>
  </div>)
}

export default IndexPage
