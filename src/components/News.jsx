import React, {Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component{

    constructor(props){
        super(props);
        console.log('News Constructor.');
        this.state={
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title=`${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} - NewsMonkey App`;
    } 

    async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page
        });
    }

    async componentDidMount(){
        // console.log('cdm');
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43d02a61e26f47638be60ac5e4c5ff4e&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles, 
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });

        this.setState({
            page: this.state.page
        })

        this.updateNews();
    }
    
    handlePrevClick=async ()=>{
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43d02a61e26f47638be60ac5e4c5ff4e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // });
        this.setState({
            page: this.state.page - 1
        })

        this.updateNews();
    }

    handleNextClick=async ()=>{
        if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43d02a61e26f47638be60ac5e4c5ff4e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading: true});
            // let data=await fetch(url);
            // let parsedData=await data.json();
            // console.log(parsedData);
            // this.setState({
            //     page: this.state.page + 1,
            //     articles: parsedData.articles,
            //     loading: false
            // });

            this.setState({
                page: this.state.page + 1
            })

            this.updateNews();
        }
    }

    fetchMoreData = async ()=>{
        this.setState({
            page: this.state.page + 1
        })

        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})

        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults,
            loading: false
        });

    }

    pageSize=this.props;
    render(){
        return(
            <>
                
                <h2 className='text-center my-4'>{`NewsMonkey - Top ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} Headlines`}</h2>

                {this.state.loading && <Spinner />}

                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!=this.state.totalResults} loader={<Spinner />}>
                    <div className="container">
                     
                        <div className="row">
                            {this.state.articles.map((element,index)=>{
                            return <div className="col-md-4 my-3" key={index}>
                                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://indiaeducationdiary.in/wp-content/uploads/2022/02/Penn-State-University.jpg"} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                            
                            {/* <div className="container d-flex justify-content-between">
                                <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                                <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                            </div> */}
                            
                        </div>

                           
                    </div>

                </InfiniteScroll>

               
            </>
        )
    }
}