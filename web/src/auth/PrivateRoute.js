import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getToken } from './tokens/token'

const PrivateRoute = ({component: Component, ...rest}) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    return setAuth(getToken)
  }, [])

  return (
    <Route
      {...rest} render={props => (
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      )}
    />
  )
}

export default PrivateRoute