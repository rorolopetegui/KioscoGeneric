/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { HomeComponent } from '../../components';

const styles = {
  bgText: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontWeight: 'bold',
    border: '3px solid #f1f1f1',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'z-index': '2',
    width: '80%',
    padding: '20px',
    'text-align': 'center',
  },
  bgImage: {
    width: '100%',
  },
};
const welcomeImageName = 'WelcomeImage.jpg';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <HomeComponent
        imgName={welcomeImageName}
        title="Grido"
        text="La mejor heladeria del mundo"
        styles={styles}
      />
    );
  }
}
