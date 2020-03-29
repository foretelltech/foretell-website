import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/layout'
import HeaderSection from '../components/mvp/headerSection'
import Benefits from '../components/mvp/benefits'
import Cards from '../components/mvp/cards'
import MaintenanceProviders from '../components/mvp/maintenanceProviders'
import { Features1, Features2 } from '../components/mvp/features'
import Footer from '../components/common/footer'

const TopSection = styled.div`
  height: 1477px;
  background-image: radial-gradient(circle at 49% 3%, #5851ce, #27266a 15%, #050824 30%);
`

const MVP = () => {
  return (<div>
    <TopSection>
      <Layout>
        <HeaderSection/>
        <Benefits/>
        <Cards/>
        <MaintenanceProviders/>
        <Features1/>
      </Layout>
      <Features2/>
      <Footer/>
    </TopSection>
  </div>)
} 

export default MVP