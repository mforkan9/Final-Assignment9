import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ContextUse } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const {value} = useContext(ContextUse)
    const [loggedInUser,setLoggedInUser] = value
    return (
        <div>
                <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;