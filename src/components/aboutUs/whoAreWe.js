import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import foretellIcon from '../../assets/foretell-icon.svg'

const Header = styled.div`
  width: 541px;
  height: 55px;
  font-size: 52px;
  font-weight: bold;
  line-height: 1.06;
  color: #ffffff;
  margin-bottom: 45px;
`

const Description = styled.div`
  width: 539px;
  height: 120px;
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 46px;
`

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 151px;
  height: 50px;
  border-radius: 4px;
  background-color: #5eaf80;
  font-size: 18px;
  line-height: 1.67;
  text-align: center;
  color: #ffffff;
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

const Content = styled.div`
  
`

const Img = styled.div`
  margin-right: 30px;
  margin-top: -50px;
`

const Wrapper = styled.div`
  margin-top: 230px;
`

const WhoAreWe = () => {
  return (<Wrapper className='d-flex align-items-center justify-content-between'>
    <Content>
      <Header> Who we are? </Header>
      <Description> A multidisciplinary team of dedicated designers, scientists, researchers and engineers, whose core mission is to reshape the future of the technology that powers the world. </Description>
      <CTA> 
        <Link
          to='/mvp'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          Learn More
        </Link>
      </CTA>
    </Content>
    <Img>
      <img src={foretellIcon} alt='' draggable={false} />
    </Img>
  </Wrapper>)
} 

export default WhoAreWe