import React, {Component} from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Category extends Component {
  render() {
    let {movies, category} = this.props
    let movieList = []
    
    if (movies){
      for (var i = 0; i < 8; i++){
        let movie = movies[i]
        movieList.push(( 
          <Col key={i} className='movie' xs={5} sm={4} md={3} lg={2} xl={2}>
            <img className='Poster' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`} alt='movie poster'/>
            <h3>{movie.title}</h3>
          </Col> 
        ))
      }
    }

    return (
      <div className='Category'>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} >
            <h1 className='Category-title'>{category}</h1>
          </Col>
        </Row>
        <Row > 
          {movieList}
        </Row>
      </div>
    );
  }
}

export default Category;
