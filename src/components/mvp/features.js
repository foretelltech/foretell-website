import React from 'react'
import styled from 'styled-components'
import basicAttributesImg from '../../assets/basic-attributes-feature.png'
import partsTableImg from '../../assets/parts-table-feature.png'
import advancedVisualizationImg from '../../assets/advanced-visualization-feature.png'

import maintenanceHistoryImg from '../../assets/maintenance-history.svg'
import rulImg from '../../assets/rul.svg'
import partsLikelyToFailImg from '../../assets/parts-likely-to-fail.png'
import commonRepairsImg from '../../assets/common-repairs.svg'

import AppContainer from '../common/appContainer'

const data = [
  {
    img: basicAttributesImg,
    header: 'Basic Attributes',
    description: 'Read the description and specifications of the platform, system, subsystem or part you are working on and validate the visual reference with a picture to make sure you have the right result.'
  },
  {
    img: partsTableImg,
    header: 'Parts Table',
    description: 'Access parts data of the platform, system or subsystem by name and number and see hours in operation, date in which a specific part was put in place and remaining useful life (RUL).'
  },
  {
    img: advancedVisualizationImg,
    header: 'Advanced Visualization',
    description: 'Navigate and visualize the parts of a platform, system or subsytem and identify all its components.'
  }
]

const data2 = [
  {
    img: maintenanceHistoryImg,
    header: 'Maintenance History',
    description: 'Make decisions based on the historical maintenance information of the platform. Identify the date, the type of maintenance, the reason and the previous solutions.'
  },
  {
    img: rulImg,
    header: 'Remaining Useful Life',
    description: 'Foretell prediction relies on on-board sensor access on the platforms to give the most reliable prediction about the reimaining useful life of a part, subsystem or system.'
  },
  {
    img: partsLikelyToFailImg,
    header: 'Parts Likely to Fail',
    description: 'When working on a platform, the system will display the parts likely to fail related to it, providing a short description of the issue.'
  },
  {
    img: commonRepairsImg,
    header: 'Common Repairs',
    description: 'Get acquainted in less time about particular products and their repair procedures with a list of suggestions available in the application.'
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
  width: 90%;
`

const Feature = ({index, img, header, description}) => {
  return (<Container className={`${index%2 ? 'flex-row-reverse' :'' } d-flex align-items-center justify-content-between`}>
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
  margin-top: 100px;
  margin-bottom: 100px;
`

export const Features1 = () => {
  return (<div className='mb-5'>
    {data.map((item, index) => (<div className='d-flex align-items-center justify-content-center' key={index}>
      <Feature index={index} {...item} />
    </div>))}
  </div>)
} 

export const Features2 = () => {
  return (<Section>
    <AppContainer>
      <div className='w-100 d-flex align-items-center justify-content-center'>
        <SectionHeader>Data driven decision making support</SectionHeader>
      </div>
      <div className='mb-5'>
        {data2.map((item, index) => (<div className='d-flex align-items-center justify-content-center' key={index}>
          <Feature index={index + 1} {...item} />
        </div>))}
      </div>
    </AppContainer>
  </Section>)
}

