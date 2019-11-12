import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Slider from 'react-slick'; //for carousal

class Category extends Component {
  render () {
    let {movies, category, handleClick} = this.props;

    //used for carousal
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 7,
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
            <div key={i} className="movie" onClick={() => handleClick (movie)}>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
                alt="movie poster"
              />
              <p className="movie-title">{movie.title}</p>
            </div>
          );
        })
      : [];

    return (
      <div className="category">
        <Row>
          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <h2 className="category-title">{category}</h2>
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
