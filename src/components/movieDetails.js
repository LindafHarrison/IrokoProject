import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

class MovieDetails extends Component {
  render () {
    let {reviews, details, videos} = this.props.movie;
    console.log ('videos', videos);
    // https://www.themoviedb.org/movie/{videos.id}-[details.title split(' ').join('-')]#play={videos[0].key}
    // https://www.themoviedb.org/movie/420818-the-lion-king#play=7TavVZMewpY

    let revContainer = reviews
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
      : <p>No Reviews</p>;

    return (
      <div className="Movie-details">
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
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
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
            </Grid>
          </Col>
        </Row>
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
            <p>{details.overview}</p>
            <hr />
          </Col>
        </Row>
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
      </div>
    );
  }
}

export default MovieDetails;

// adult: false
// backdrop_path: "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg"
// belongs_to_collection: null
// budget: 260000000
// genres: Array(3)
// 0: {id: 12, name: "Adventure"}
// 1: {id: 16, name: "Animation"}
// 2: {id: 18, name: "Drama"}
// length: 3
// __proto__: Array(0)
// homepage: "https://movies.disney.com/the-lion-king-2019"
// id: 420818
// imdb_id: "tt6105098"
// original_language: "en"
// original_title: "The Lion King"
// overview: "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his."
// popularity: 207.234
// poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg"
// production_companies: (2) [{…}, {…}]
// production_countries: [{…}]
// release_date: "2019-07-12"
// revenue: 1649676757
// runtime: 118
// spoken_languages: [{…}]
// status: "Released"
// tagline: "The King has Returned."
// title: "The Lion King"
// video: false
// vote_average: 7.1
// vote_count: 3476
// __proto__: Object
