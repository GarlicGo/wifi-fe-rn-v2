import { StyleSheet } from 'react-native';

const SIGN_BUTTON_SIZE = 250;

export const signButtonStyles = StyleSheet.create({
  signButton: {
    width: SIGN_BUTTON_SIZE,
    height: SIGN_BUTTON_SIZE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
  },
  signButtonText: {
    fontSize: 30,
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  option: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
