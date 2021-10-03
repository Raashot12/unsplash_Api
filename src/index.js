import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import unsplash from './api/unsplash';
import ImageList from './ImageList';

// https://api.unsplash.com/search/photos?query=term
const Index = () =>
{
    const [image, setImages] = useState( [] )
    const onSearchSubmit = async ( term ) =>
    {
        const { data } = await unsplash.get( "/search/photos", {
            params: { query: term },

        } );
        setImages( data.results )
        console.log( data.results )
    }

    return (
        <div className="ui container" style={ { marginTop: "10px" } }>
            <SearchBar onSubmit={ onSearchSubmit } />
            Found: { image.length } { image.length === 0 ? "image" : "images" }
            <ImageList images={ image } />
        </div>
    )
}

export default Index

ReactDOM.render( <Index />, document.querySelector( '#root' ) );



// const onSearchSubmit = ( term ) =>
// {
//     axios.get( "https://api.unsplash.com/search/photos", {
//         params: { query: term },
//         headers: {
//             Authorization: "Client-ID KoMB6JrBiAxWXIAXXPtDKUpWGQpSMQNK_dMKjY1uc0A"
//         }
//     } ).then( response =>
//     {
//         console.log( response.data.results )
//     } )

// }