import React, { ReactNode, PropsWithChildren } from 'react'
import styled from 'styled-components';

interface SplitProps extends PropsWithChildren {
  leftWeight?: number;
  rightWeight?: number;
}

const Container = styled.div`
  display: flex;
`

const Pane = styled.div`
  flex: ${props => props.weight};
`

export const SplitScreen = ({ leftWeight = 1, rightWeight = 1, children }: SplitProps): ReactNode => {
  const [left, right] = children
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  )
}
