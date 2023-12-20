import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Persinolisation from './Persinolisation';



export class News extends Component {

    static defaultProps ={
      country: 'in',
      category: 'science'
    }

    static propTypes ={
      country: PropTypes.string,
      category: PropTypes.string
    }

    articles = [
        {
          "source": {
            "id": "australian-financial-review",
            "name": "Australian Financial Review"
          },
          "author": "Karen Maley",
          "title": "We're now in the fourth and final act of the super bubble collapse - The Australian Financial Review",
          "description": "Jeremy Grantham highlights the eerie parallels between this year’s sharemarket gyrations and the bursting of previous sharemarket super bubbles.",
          "url": "https://www.afr.com/companies/financial-services/we-re-now-in-the-fourth-and-final-act-of-the-super-bubble-collapse-20220907-p5bfzs",
          "urlToImage": "https://static.ffx.io/images/$zoom_0.2905%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_opinion_no_age_social_wm/a5ab81ac5775ad159d8f693d56773a810d2382b1",
          "publishedAt": "2022-09-07T08:21:00Z",
          "content": "Yields on risky junk bonds and leveraged loans have pushed sharply higher, as investors worry about the growing risk that debt-laden companies will default on their loan repayments.\r\nThis all smacks … [+5012 chars]"
        },
        {
          "source": {
            "id": "australian-financial-review",
            "name": "Australian Financial Review"
          },
          "author": "Michael Roddan",
          "title": "Chinese walls still standing at Bell Potter - The Australian Financial Review",
          "description": "“Australia’s most loved sharemarket report” gets the inside scoop. Well, sort of.",
          "url": "https://www.afr.com/rear-window/chinese-walls-still-standing-at-bell-potter-20220822-p5bbs9",
          "urlToImage": "https://static.ffx.io/images/$zoom_0.8078%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_124%2C$y_40/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/2243d1c2b74c4ef6951cb2cbc3354923315ffe80",
          "publishedAt": "2022-08-23T06:34:00Z",
          "content": "In the last week of July, Coppo included in Australias most loved sharemarket report a call by his colleague and sell-side analyst John Hester, following the release of PARs quarterly figures, noting… [+1807 chars]"
        },
        {
          "source": {
            "id": "australian-financial-review",
            "name": "Australian Financial Review"
          },
          "author": "Matthew Cranston",
          "title": "Fed's message on rates is mispricing the sharemarket bottom - The Australian Financial Review",
          "description": "Fed's message on rates is mispricing the sharemarket bottom  The Australian Financial Review",
          "url": "https://www.afr.com/world/north-america/fed-s-message-on-rates-is-mispricing-the-sharemarket-bottom-20220818-p5baqe",
          "urlToImage": "https://static.ffx.io/images/$zoom_0.5298%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_analysis_no_age_social_wm/eff91f3d1238cde36d8a464b8358a0b42f0a2a4e",
          "publishedAt": "2022-08-18T02:06:00Z",
          "content": "Another 0.75 percentage-point increase would reflect policymakers determination not to relax until they see definitive signs of consistently slower growth in the consumer price index (CPI). A half-po… [+3190 chars]"
        },
        {
          "source": {
            "id": "australian-financial-review",
            "name": "Australian Financial Review"
          },
          "author": "Richard Henderson",
          "title": "ASX firms 0.5pc as strong results power shares - The Australian Financial Review",
          "description": "Companies from a range of sectors including HomeCo, WiseTech Global and Iluka Resources helped pull the sharemarket higher on Wednesday.",
          "url": "https://www.afr.com/markets/equity-markets/asx-firms-0-5pc-as-strong-results-power-shares-20220824-p5bc9f",
          "urlToImage": "https://static.ffx.io/images/$zoom_0.9677%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_176%2C$y_377/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/5493e8c325e77877d9b24e54ff672d012966acde",
          "publishedAt": "2022-08-24T06:41:00Z",
          "content": "Investors responded warmly to WiseTechs full-year results, in which it boosted net profit by 80 per cent to $194.6 million, helped along by extra demand amid global supply chain disruptions.\r\nShares … [+2620 chars]"
        }
      ];
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
            
        }
    }
    previousitem = async()=>{
      console.log("previous is clicked");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec6f2ec751104aebb677890080a52e97&page=${this.state.page - 1}&pageSize=9`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata); 
      this.setState({
        page: this.state.page - 1,
        articles: parseddata.articles,
        loading: false})
      
    }
    nextitem= async()=>{
      console.log("next is clicked");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec6f2ec751104aebb677890080a52e97&page=${this.state.page + 1}&pageSize=9`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata); 
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false
      })
    }
   
   async componentDidMount(){
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec6f2ec751104aebb677890080a52e97&page=1&pageSize=9`;
       this.setState({loading: true});
       let data = await fetch(url);
       let parseddata = await data.json();
       this.setState({articles: parseddata.articles})
       console.log(parseddata); 
       this.setState({articles: parseddata.articles, totalResults: parseddata.totalResults,loading: false})
    }

  render() {
    return (
     <div className='container my-3'>
        <h2> NewsMonkey - Top Headlines</h2>
        <div className='d-flex justify-content-evenly'>
        <div className="row me-2">
        {this.state.loading && <Spinner></Spinner>}
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,45):""} description= {element.description?element.description.slice(0 , 90):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}></Newsitem>
        </div>
        })}    
        </div>
        <Persinolisation></Persinolisation>
        </div>
        
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-dark" onClick={this.previousitem}>&larr; Previous</button>
        <button disabled={this.state.page + 1 >  Math.ceil(this.state.totalResults/9)} className="btn btn-sm btn-dark" onClick={this.nextitem}>Next &rarr;</button>
        </div>
     </div>
    
    )
  }
}

export default News