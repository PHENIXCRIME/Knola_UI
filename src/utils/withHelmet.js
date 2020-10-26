import React from 'react'
import { Helmet } from 'react-helmet'

function withHelmet (title) {
  return Component => (props) => (
    <>
      <Helmet>
        {/* <link href="https://fonts.googleapis.com/css2?family=Pridi:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet
