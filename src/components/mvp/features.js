import React from 'react'
import styled from 'styled-components'
import screenshotImg from '../../assets/screenshot.png'
import AppContainer from '../common/appContainer'

const data = [
  {
    img: screenshotImg,
    header: 'Basic Attributes',
    description: 'Read the description and specifications of the platform, system, subsystem or part you are working on and validate the visual reference with a picture to make sure you have the right result.'
  },
  {
    img: screenshotImg,
    header: 'Parts Table',
    description: 'Access parts data of the platform, system or subsystem by name and number and see hours in operation, date in which a specific part was put in place and remaining useful life (RUL).'
  },
  {
    img: screenshotImg,
    header: 'Advanced Visualization',
    description: 'Navigate and visualize the parts of a platform, system or subsytem and identify all its components.'
  }
]

const Header = styled.div`
  font-size: 38px;
  font-weight: bold;
  line-height: 1.29;
  color: #050824;
  margin-bottom: 40px;
`

const Description = styled.div`
  width: 521px;
  font-size: 18px;
  line-height: 1.67;
  color: #050824;
`

const Container = styled.div`
  margin-bottom: 115px;
`

const Feature = ({index, img, header, description}) => {
  return (<Container className={`${index%2 ? 'flex-row-reverse' :'' } d-flex w-100 align-items-center justify-content-between`}>
    <div>
      <img src={img} alt='' draggable={false} />
    </div>
    <div>
      <Header>{header}</Header>
      <Description>{description}</Description>
    </div>
  </Container>)
}

const Section = styled.div`
  background-color: #f4f6fa;
`

const SectionHeader = styled.div`
  width: 566px;
  height: 110px;
  font-size: 46px;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  color: #050824;
  margin-top: 63px;
  margin-bottom: 100px;
`

export const Features2 = () => {
  return (<Section>
    <AppContainer>
      <div className='w-100 d-flex align-items-center justify-content-center'>
        <SectionHeader>Data driven decision making support</SectionHeader>
      </div>
      {data.map((item, index) => (<div key={index}>
        <Feature index={index+1} {...item} />
      </div>))}
    </AppContainer>
  </Section>)
}


export const Features1 = () => {
  return (<div>
    {data.map((item, index) => (<div key={index}>
      <Feature index={index} {...item} />
    </div>))}
  </div>)
} 
