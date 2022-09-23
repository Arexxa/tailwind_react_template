import React, { ReactNode } from 'react'
import Navbar from '../Component/Navbar'

interface Props {
  children: ReactNode
}

const MainLayout = (props: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  )
}

export default MainLayout
