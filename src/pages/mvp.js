import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/layout'
import HeaderSection from '../components/mvp/headerSection'
import Benefits from '../components/mvp/benefits'
import Cards from '../components/mvp/cards'

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
      </Layout>
    </TopSection>
  </div>)
} 

export default MVP