import React from "react"
import styled from 'styled-components'
import HeaderSection from '../components/landing/HeaderSection'
import Layout from "../components/common/Layout"
import DescriptionSection from "../components/landing/DescriptionSection"
import HowWeDoIt from "../components/landing/HowWeDoIt"
import ScrenshotSection from "../components/landing/ScreenshotSection"
import Footer from "../components/common/Footer"

const Background = styled.div`
  padding-bottom:80px;
  width: 100vw;
  background-image: linear-gradient(to top, #262468, #070927);
`

const Content = styled.div`
`

const IndexPage = () => (<div>
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

export default IndexPage
