import React from 'react'
import styled from 'styled-components'
import screenshotImg from '../../assets/screenshot.jpg'

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

const Features = () => {
  return (<div>
    {data.map((item, index) => (<div key={index}>
      <Feature index={index} {...item} />
    </div>))}
  </div>)
} 

export default Features