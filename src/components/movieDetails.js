import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ModalVideo from 'react-modal-video';
import {css} from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

import Reviews from './reviews';
import Synopsis from './synopsis';

class MovieDetails extends Component {
  constructor (props) {
    super (props);
    this.state = {
      isOpen: false,
      movieID: this.props.movie,
      reviews: null,
      details: null,
      videos: null,
      loading: true,
    };
    this.openModal = this.openModal.bind (this);
    this.closeModal = this.closeModal.bind (this);
  }

  componentDidMount () {
    let {movieID} = this.state;
    let API_KEY = ''; //place API key here

    //fetches reviews
    fetch (
      `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}`
    )
      .then (res => res.json ())
      .then (data => {
        this.setState ({reviews: data});
      })
      .catch (error => {
        console.log ('Looks like there was a problem: \n', error);
      });

    //fetches movie details
    fetch (`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`)
      .then (res => res.json ())
      .then (data => {
        this.setState ({details: data});
      })
      .catch (error => {
        console.log ('Looks like there was a problem: \n', error);
      });

    //fetches trailer
    fetch (
      `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`
    )
      .then (res => res.json ())
      .then (data => {
        this.setState ({videos: data});
      })
      .catch (error => {
        console.log ('Looks like there was a problem: \n', error);
      });
  }

  componentDidUpdate () {
    let {reviews, details, videos, loading} = this.state;
    if (reviews && details && videos && loading)
      this.setState ({loading: false});
  }

  openModal () {
    //open trailer
    this.setState ({isOpen: true});
  }

  closeModal () {
    //close trailer
    this.setState ({isOpen: false});
  }

  render () {
    let {reviews, details, videos, isOpen, loading} = this.state;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
    return (
      <div className="movie-details">
        {loading
          ? //fetches are not complete -> loading screen
            <div className="sweet-loading">
              <MoonLoader
                css={override}
                sizeUnit={'px'}
                size={150}
                color={'#123abc'}
                loading={loading}
              />
            </div>
          : <div>
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
                <Col xs={7} sm={7} md={7} lg={7} xl={7} className="right-side">
                  <p className="movie-title">{details.title}</p>
                  <Grid fluid>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                        <p>
                          Rating: {details.vote_average}/10
                        </p>
                      </Col>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                        <p>
                          Duration:
                          {' '}
                          {Math.floor (details.runtime / 60)} hr
                          {' '}
                          {details.runtime % 60 !== 0
                            ? details.runtime % 60 + ' min'
                            : ''}
                        </p>
                      </Col>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                        <p>Release Date: {details.release_date}</p>
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
                            onClose={this.closeModal}
                          />
                          <button
                            className="trailer-button"
                            onClick={this.openModal}
                          >
                            Movie Trailer
                          </button>
                        </div>
                      </Row>}
                  </Grid>
                </Col>
              </Row>
              <Synopsis synopsis={details.overview} />
              <Reviews reviews={reviews.results} />
            </div>}
      </div>
    );
  }
}

export default MovieDetails;
