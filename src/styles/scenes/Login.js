import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import '../GlobalStyles';

export const height = Dimensions.get('window').height;
export const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$colorBlue',
    flex: 1,
    margin: 0,
    borderWidth: 0,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center'
  },
  loginContainer: {
    backgroundColor: '$colorBlue',
    flex: 1,
    margin: 0,
    borderWidth: 0,
    justifyContent: 'center'
  },
  loginLogoContainer: {
    alignSelf: 'center',
    overflow: 'visible'
  },
  loginFormContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  loginLogo: {
    overflow: 'visible',
  },
  hidden: {
    height: 0,
    padding: 0,
    width: 0
  },
  facebookLogin: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center'
  },
  facebookLoginButton: {
    backgroundColor: '#3B5998',
    borderRadius: 5,
    padding: 5
  },
  facebookLoginButtonText: {
    color: '$colorWhite',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 14,
    marginRight: 5
  },
  facebookLoginButtonIcon: {
    marginLeft: 5
  }
  // facebookLoginButton: {
  //   flex: 1
  // }
});

