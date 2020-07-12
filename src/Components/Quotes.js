import React, { Component } from 'react';

class Quotes extends React.Component {
  render() {

    if(this.props.data){
      var quotes = this.props.data.quotes.map(function(quotes){
        var projectImage = 'images/'+quotes.image;
        return <div key={quotes.title} className="columns quotes-item" >
           <div className="item-wrap">
            <img alt={quotes.title} src={projectImage} width='500' height='500' />
          </div>
        </div>
      })
    }

    return (
      <section id="quotes">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Favorite Quotes.</h1>

            <div id="quotes-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {quotes}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Quotes;
 