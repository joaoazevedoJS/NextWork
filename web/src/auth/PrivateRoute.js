import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getToken } from './tokens/token'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    const token = getToken() || ''

    token.length > 0 ? setAuth(true) : setAuth(false)

    if(token.length <= 0)
      localStorage.setItem('path', rest.path)

  // eslint-disable-next-line react-hooks/exhaustive-deps
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