import React, { useEffect  } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import PrivateRoute from './helpers/commons/PrivateRoute';
import PublicRoute from './helpers/commons/PublicRoute';
import routes from './home/routes/routes';
import { setCurrentUser, log_out } from './home/services/components/auths/authAction'
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  // Check for token
  let userLogin = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (userLogin) {
      dispatch(setCurrentUser(userLogin.user_url));
      if (!userLogin.isRemember) {
        setTimeout(function () { log_out(); }, 18000000);
      }
    }
    return () => { }
  }, [])

  // route này mới chỉ là của home thôi, sau có define route admin thì cộng thêm route đó vào
  const showContent = routes => {

    let result = [];
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            layout={route.layout}
          />
        ) : (
            <PublicRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
              layout={route.layout}
            />
          );
      });
    }
    return <Switch> {result} </Switch>;
  };

  return (
    <Router>
      {showContent(routes)}
    </Router>
  );

}



export default App;
