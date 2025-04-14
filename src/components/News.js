import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }
 
  async updateNews() {
    const { page } = this.state;
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=2025-04-11&to=2025-04-12&sortBy=popularity&pageSize=9&apiKey=${this.props.api}&page=${page}`;
    this.setState({ loading: true });
    this.props.setProgress(40);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ page: 1 }, () => {
        this.updateNews();
      });
    }
  }

  handlePrevious = async () => {
    await this.setState((prevState) => ({
      page: prevState.page - 1
    }));
    this.updateNews();
  };

  handleNext = async () => {
    await this.setState((prevState) => ({
      page: prevState.page + 1
    }));
    this.updateNews();
  };

  render() {
    return (
      <div className='container my-4 pt-4'>
        <h2 className='text-center'>NewsMonkey - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
        {this.state.loading && <h4 className="text-center">Loading...</h4>}

        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-4 my-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : " "}
                description={element.description ? element.description.slice(0, 120) : " "}
                imgUrl={element.urlToImage ? element.urlToImage : "https://cdn3.iconfinder.com/data/icons/it-and-ui-mixed-filled-outlines/48/default_image-1024.png"}
                newsUrl={element.url}
                date ={element.publishedAt ? new Date(element.publishedAt).toGMTString() : " "}
                author={element.author ? element.author : "Unknown"}
                source={element.source.name ? element.source.name : "lastest"}
              />
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#F02F34" }}
            onClick={this.handlePrevious}
            disabled={this.state.page <= 1}
          >
            <i className="fa-solid fa-arrow-left"></i> Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#F02F34" }}
            onClick={this.handleNext}
          >
            Next <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default News;
