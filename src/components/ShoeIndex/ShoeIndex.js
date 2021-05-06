import React from 'react'
import styled from 'styled-components/macro'

import {WEIGHTS} from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeIndex = ({sortId, setSortId}) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label='Sort'
            value={sortId}
            onChange={ev => setSortId(ev.target.value)}
          >
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row-reverse;
  align-items: baseline;
  justify-content: flex-end;
`

const LeftColumn = styled.div`
  flex-basis: 248px;

  // top: 190px;
  // right: 32px;
`

const MainColumn = styled.div`
  max-width: 1092px;
  flex: 1;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin: 0;
`

export default ShoeIndex
