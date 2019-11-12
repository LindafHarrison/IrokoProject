import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';

class Reviews extends Component {
  render () {
    let {reviews} = this.props;

    let revContainer = reviews.length > 0
      ? reviews.map ((review, i) => {
          return (
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
              key={i}
              className="review"
            >
              <p>{review.content}</p>
              <p className="author"> - {review.author}</p>
              <hr />
            </Col>
          );
        })
      : <Col
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
          className="review"
        >
          <p> No Reviews </p>
        </Col>;

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
          <h2>Reviews</h2>
        </Col>
        {revContainer}
      </Row>
    );
  }
}

export default Reviews;
