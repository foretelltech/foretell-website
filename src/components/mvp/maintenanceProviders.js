import React from 'react'
import styled from 'styled-components'
import computerImg from '../../assets/computer-copy.svg'
import basicAttributesImg from '../../assets/maintenance-providers/basic-attrributes.svg'
import partstTableImg from '../../assets/maintenance-providers/parts-table.svg'
import partsVisualizationImg from '../../assets/maintenance-providers/parts-visualization.svg'
import maintenanceHistoryImg from '../../assets/maintenance-providers/maintenance-history.svg'
import remainingUsefulLifeImg from '../../assets/maintenance-providers/remaining-useful-life.svg'
import partsLikelyToFailImg from '../../assets/maintenance-providers/parts-likely-to-fail.svg'
import commonRepairsImg from '../../assets/maintenance-providers/common-repairs.svg'

const data = [
  {
    img: basicAttributesImg,
    title: 'Basic Attributes',
  },
  {
    img: partstTableImg,
    title: 'Parts Table',
  },
  {
    img: partsVisualizationImg,
    title: 'Parts Visualization',
  },
  {
    img: maintenanceHistoryImg,
    title: 'Maintenance History',
  },
  {
    img: remainingUsefulLifeImg,
    title: 'Remanining Useful Life',
  },
  {
    img: partsLikelyToFailImg,
    title: 'Parts Likely to Fail',
  },
  {
    img: commonRepairsImg,
    title: 'Common Repairs',
  },
]

const Wrapper = styled.div`
  margin-bottom: 100px;
`

const Providers = styled.div`
  height: 206px;
  border-radius: 8px;
  box-shadow: 0 18px 45px 0 rgba(37, 50, 56, 0.15);
  background-color: #ffffff;
`

const Container = styled.div`
  height: 119px;
  border-right: ${props => { return props.isLast ? '' : 'solid 1px #ccdae5'}} ;
`

const Header = styled.div`
  font-size: 42px;
  font-weight: bold;
  line-height: 1.31;
  text-align: center;
  color: #ffffff;
  margin-bottom: 55px;
  margin-top: 102px;
`

const Title = styled.div`
  width: ${props => {return props.title === 'Parts Table'? '50px': '120px'}};
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
  text-justify: center;
  color: #050824;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Provider = ({ title, img, isLast }) => {
  return (<Container isLast={isLast} className='d-flex flex-column align-items-center justify-content-between'>
    <Icon>
      <img src={img} alt='' draggable={false}/>
    </Icon>
    <Title title={title}> {title} </Title>
  </Container>)
}

const MaintenanceProviders = () => {
  return (<Wrapper>
    <Header> Maintenance Providers MVP </Header>
    <Providers className='d-flex align-items-center justify-content-center'>
      {data.map((item, index) => (<div className='w-100' key={index}>
        <Provider {...item} isLast={index === data.length-1}/>
      </div>))}
    </Providers>
  </Wrapper>)
} 

export default MaintenanceProviders