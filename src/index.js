import React from 'react';
import { Scene, Router, Stack, Drawer } from 'react-native-router-flux';
import { Dimensions, Platform } from 'react-native';
import DrawerBar from './component/Drawer/Drawer';
import SignUp from './container/SignUp/SignUp';
import Login from './container/Login/Login';
import Splash from './container/Splash/Splash';
import MainHome from './container/MainHome/MainHome';
import AdminHome from './container/AdminHome/AdminHome';
import StaffLogin from './container/StaffLogin/StaffLogin';
import ForgetScreen from './container/ForgetScreen/ForgetScreen';
import OtpScreen from './container/OtpScreen/OtpScreen';


import { connect } from "react-redux";

var width = Dimensions.get('window').width;

const RouterWithRedux = connect()(Router);

class Root extends React.Component {

  render() {
    return (
      <RouterWithRedux>
        <Scene key="root" hideTabBar hideNavBar>
          <Stack key="app">
            <Scene hideNavBar panHandlers={null}>
              <Scene
                initial={true}
                component={Splash}
                hideNavBar={true}
                key="Splash"
                title="Splash"
              />
              <Scene
                component={Login}
                hideNavBar={true}
                wrap={false}
                key="Login"
                title="Login"
              />
              <Scene
                component={SignUp}
                hideNavBar={true}
                wrap={false}
                key="SignUp"
                title="SignUp"
              />
               <Scene
                component={ForgetScreen}
                hideNavBar={true}
                wrap={false}
                key="ForgetScreen"
                title="ForgetScreen"
              />
              <Scene
                component={OtpScreen}
                hideNavBar={true}
                wrap={false}
                key="OtpScreen"
                title="OtpScreen"
              />
              <Drawer
                hideNavBar
                key="drawer"
                contentComponent={DrawerBar}
                drawerWidth={width - 150}>
                <Scene
                  component={MainHome} //classname
                  hideNavBar={true}
                  wrap={false}
                  key="MainHome"
                  title="MainHome"
                />
                <Scene
                  component={AdminHome} //classname
                  hideNavBar={true}
                  wrap={false}
                  key="AdminHome"
                  title="AdminHome"
                />
                <Scene
                  component={StaffLogin} //classname
                  hideNavBar={true}
                  wrap={false}
                  key="StaffLogin"
                  title="StaffLogin"
                />
              </Drawer>
            </Scene>
          </Stack>
        </Scene>
      </RouterWithRedux>
    );
  }
}

export default Root;
console.disableYellowBox = true;
