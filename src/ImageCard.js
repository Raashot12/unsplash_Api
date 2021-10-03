import React from "react";

class ImageCard extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.imagRef = React.createRef();
    this.state = { spans: 0 }
  }
  componentDidMount()
  {
    this.imagRef.current.addEventListener( "load", this.setSpans );
  }
  setSpans = () =>
  {
    const height = this.imagRef.current.clientHeight
    const spans = Math.ceil( height / 10 );
    this.setState( { spans } )
  }
  render()
  {
    const { description, urls } = this.props.image;
    return (
      <div style={ { gridRowEnd: `span ${ this.state.spans }` } }>
        <img alt={ description } src={ urls.raw } ref={ this.imagRef } />
      </div>
    );
  }
}
export default ImageCard;
