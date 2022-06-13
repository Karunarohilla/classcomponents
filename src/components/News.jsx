import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props){

    const [articles, setArticles]=useState([]);
    const [loading, setLoading]=useState(false);
    const [page, setPage]=useState(1);
    const [totalResults, setTotalResults]=useState(0);

        // this.state={
        //     articles: [],
        //     loading: false,
        //     page: 1,
        //     totalResults: 0
        // }
        // document.title=`${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} - NewsMonkey App`;


    const updateNews=async ()=>{
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)

        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page);

       
    }

    useEffect(()=>{
        document.title=`${props.category.charAt(0).toUpperCase()+props.category.slice(1)} - NewsMonkey App`;
        setPage(page);
        updateNews();
    }, [])

    // useEffect componentDidMount= async()=>{
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


        // setPage(page);
        // updateNews();
    // }
    
    const handlePrevClick=async ()=>{
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

        setPage(page-1);
        updateNews();
    }

    const handleNextClick=async ()=>{
        if(!(page +1 > Math.ceil(totalResults/props.pageSize))){

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

            setPage(page+1);
            updateNews();
        }
    }

    const fetchMoreData = async ()=>{

        setPage(page+1)

        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);

        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResult);
        setLoading(false);

    }

    const pageSize=props;

        return(
            <>
                
                <h2 className='text-center my-4'>{`NewsMonkey - Top ${props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headlines`}</h2>

                {loading && <Spinner />}

                <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length!=totalResults} loader={<Spinner />}>
                    <div className="container">
                     
                        <div className="row">
                            {articles.map((element,index)=>{
                            return <div className="col-md-4 my-3" key={index}>
                                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://indiaeducationdiary.in/wp-content/uploads/2022/02/Penn-State-University.jpg"} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                            
                            {/* <div className="container d-flex justify-content-between">
                                <button disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                                <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                            </div> */}
                            
                        </div>

                           
                    </div>

                </InfiniteScroll>

               
            </>
        )
 
}