import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Slider from 'react-slick';

class Category extends Component {
  render () {
    let {movies, category} = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      focusOnSelect: true,
      lazyLoad: 'progressive',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    let movieList = movies
      ? movies.map ((movie, i) => {
          return (
            <div key={i} className="movie">
              <img
                className="Poster"
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
                alt="movie poster"
              />
              <h3>{movie.title}</h3>
            </div>
          );
        })
      : [];

    return (
      <div className="Category">
        <Row>
          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <h1 className="Category-title">{category}</h1>
          </Col>
        </Row>
        <Slider {...settings}>
          {movieList}
        </Slider>
      </div>
    );
  }
}

export default Category;
