import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ModalVideo from 'react-modal-video';

import Reviews from './reviews';
import Synopsis from './synopsis';

class MovieDetails extends Component {
  render () {
    let {
      movie: {reviews, details, videos},
      openModal,
      closeModal,
      isOpen,
    } = this.props;

    return (
      <div className="movie-details">
        <Row>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            xsOffset={1}
            smOffset={1}
            mdOffset={1}
            lgOffset={1}
            xlOffset={1}
          >
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${details.poster_path}`}
              alt="movie poster"
            />
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} className="left-side">
            <p>{details.title}</p>
            <p>{details.overview}</p>
            <Grid fluid>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>
                    rating: {details.vote_average}/10
                  </p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>
                    duration:
                    {' '}
                    {Math.floor (details.runtime / 60)} hr
                    {' '}
                    {details.runtime % 60 !== 0
                      ? details.runtime % 60 + ' min'
                      : ''}
                  </p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>release date: {details.release_date}</p>
                </Col>
              </Row>
              {videos &&
                videos.results[0] &&
                <Row>
                  <div>
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId={videos.results[0].key}
                      onClose={closeModal}
                    />
                    <button onClick={openModal}>Movie Trailer</button>
                  </div>
                </Row>}
            </Grid>
          </Col>
        </Row>
        <Synopsis synopsis={details.overview} />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}

export default MovieDetails;
