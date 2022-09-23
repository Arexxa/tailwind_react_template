import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const FullScreenLayout = (props: Props): JSX.Element => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

export default FullScreenLayout
