import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

class MovieDetails extends Component {
  render () {
    let {movie} = this.props;
    console.log ('movie', movie);
    return (
      <div>
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
              className="Poster"
              src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
              alt="movie poster"
            />
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <Grid fluid>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>rating: {}</p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>release date: {movie.release_date}</p>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
        <Row>
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
          >
            <p>{movie.overview}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieDetails;
