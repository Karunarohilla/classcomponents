import React, {Component} from 'react';
import NewsItem from './NewsItem';

export default class NewsPractice extends Component{
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c3e9f8f7b8845d2b0f0f79b749645be&page=1&pageSize=20`;
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    handlePrevClick=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c3e9f8f7b8845d2b0f0f79b749645be&page=${this.state.page -1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });

    }

    handleNextClick= async ()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }else{
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c3e9f8f7b8845d2b0f0f79b749645be&page=${this.state.page +1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData=await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            });
        }
    }

    render(){
        return(
            <>
                <div className="container">
                    <h2>News Component</h2>
                    <div className="row">
                        {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                        
                    </div>

                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr; </button>
                    </div>
                </div> 
                
            </>
        )
    }
}