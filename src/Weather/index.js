import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component
{
  constructor ( props )
  {
    super( props )
    this.state = { lat: null, errorMessage: '' };


  }
  componentDidMount()
  {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState( { lat: position.coords.latitude } ),
      err => this.setState( { errorMessage: err.message } )
    );
  }

  // React says we have to define render!!
  // Helper function
  renderContent()
  {
    if ( this.state.errorMessage && !this.state.lat )
    {
      return <div>Error: { this.state.errorMessage }</div>;
    }

    if ( !this.state.errorMessage && this.state.lat )
    {
      return <SeasonDisplay lat={ this.state.lat } />;
    }

    return <Spinner message="Please accept us knowing your location" />;
  }
  render()
  {
    return <div>{ this.renderContent() }</div>
  }
}

ReactDOM.render( <App />, document.querySelector( '#root' ) );


