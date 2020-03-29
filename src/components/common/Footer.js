import React from 'react'
import styled from 'styled-components'
import AppContainer from './appContainer'
import logoImg from '../../assets/logo.svg'
import { Link } from 'gatsby'
import googleImg from '../../assets/google-cloud-white.png'

const Background = styled.div`
  background-image: linear-gradient(to top, #050824,#0E0F36);
`

const Section = styled.div`
  width: 250px;
`

const Content = styled.div`
  font-size: 16px;
  line-height: 1.88;
  color: #ffffff;

`

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #ffffff;
  margin-bottom: 25px;
`

const Wrapper = styled.div`
  padding-top: 46px;
`

const Clickable = styled.div`
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      :hover {
        cursor: pointer;
        opacity: 0.7;
      }
`

const Container = styled.div`
  padding-bottom: 30px;
  border-bottom: solid 1px #222160;
`

const Copyright = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 12px;
  line-height: 2.33;
  text-align: right;
  color: #ffffff;
`

const Footer = () => {
  return (
    <Background>
      <Wrapper>
        <AppContainer>
          <Container className='d-flex justify-content-between'>
            <Section>
              <Clickable onClick={() => { window.location = '/' }}>
                <img draggable={false} className='mt-3' src={logoImg} alt='logo'/>
              </Clickable>
            </Section>
            <Section>
              <Title> Contact </Title>
              <Content>
                <div> info@foretelltech.com </div>
                <div> 300 North LaSalle Dr., Chicago, Illinois 60654, United States. </div>
              </Content>
            </Section>
            <Section >
              <div className='ml-5'>
                <Title> Company </Title>
                <Content>
                  <Clickable>
                    <Link
                      to='/'
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}>
                      Foretell
                    </Link>
                  </Clickable>
                  <Clickable>
                    <Link
                      to='/mvp'
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}>
                      MP-MVP
                    </Link>
                  </Clickable>
                  <Clickable>
                    <Link
                      to='/aboutUs'
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}>
                      About Us
                    </Link>
                  </Clickable>
                </Content>
              </div>
            </Section>
            <Section>
              <Title> With the Support of </Title>
              <Content>
                <img draggable={false} src={googleImg} alt='img'/>
              </Content>
            </Section>
          </Container>
          <Copyright>
            2020 Foretell Technologies. All rights reserved
          </Copyright>
        </AppContainer>
      </Wrapper>
    </Background>
  )
} 

export default Footer