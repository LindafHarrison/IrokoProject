import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';

class Synopsis extends Component {
  render () {
    let {synopsis} = this.props;

    return (
      <Row>
        <Col
          xs={11}
          sm={11}
          md={11}
          lg={11}
          xl={11}
          xsOffset={1}
          smOffset={1}
          mdOffset={1}
          lgOffset={1}
          xlOffset={1}
        >
          <h2>Synopsis</h2>
        </Col>
        <Col
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
          xsOffset={1}
          smOffset={1}
          mdOffset={1}
          lgOffset={1}
          xlOffset={1}
          className="synopsis"
        >
          <p>{synopsis}</p>
          <hr />
        </Col>
      </Row>
    );
  }
}

export default Synopsis;
