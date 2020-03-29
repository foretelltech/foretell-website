import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/common/layout'
import HeaderSection from '../components/mvp/headerSection'
import Benefits from '../components/mvp/benefits'
import Cards from '../components/mvp/cards'
import MaintenanceProviders from '../components/mvp/maintenanceProviders'
import { Features1, Features2 } from '../components/mvp/features'
import Footer from '../components/common/footer'
import bcrypt from 'bcryptjs'


const TopSection = styled.div`
  height: 1477px;
  background-image: radial-gradient(circle at 49% 3%, #5851ce, #27266a 15%, #050824 30%);
`

const MVP = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(()=>{
    let password = localStorage.getItem('password') ? localStorage.getItem('password'): ''
    bcrypt.compare(password, '$2a$04$Z1jhtEnrfE9aEGi9PI.AvOSeqQZ4Ulh3zoCrY5DxazcsDZ6ktJ4sq', function (err, isValid) {
      if (!isValid) {
        localStorage.setItem('redirectPage', 'mvp')
        window.location = '/auth'
      }
      else
        setIsAuthorized(true)
    })
  },[])

  return (<div>
    {isAuthorized &&
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
      </TopSection>}
  </div>)
} 

export default MVP