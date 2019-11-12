import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import logo from '../logos/logo.svg';
import irokoLogo from '../logos/irokoLogo.png';
import LH from '../logos/LH.jpg';

class Header extends Component {
  render () {
    let {handleHeaderClick} = this.props;
    return (
      <Row className="header" onClick={handleHeaderClick} middle="lg md">
        <Col
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          xsOffset={1}
          smOffset={1}
          mdOffset={1}
          lgOffset={1}
          xlOffset={1}
        >
          <img src={logo} className="App-logo" alt="Movie-DB-logo" />
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <img src={irokoLogo} className="App-logo" alt="Iroko-logo" />
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
          <img src={LH} className="App-logo" alt="LH-logo" />
        </Col>
        <Col
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          xsOffset={6}
          smOffset={6}
          mdOffset={6}
          lgOffset={6}
          xlOffset={6}
        >
          <button className="back-to-home">Home</button>
        </Col>
      </Row>
    );
  }
}

export default Header;
