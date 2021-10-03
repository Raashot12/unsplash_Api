import React from "react";
import "./SeasonDisplay.css"
// const SeasonDisplay = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

// export default SeasonDisplay;

// How to get user physical location
// THROUGH GEO-LOCATION API
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake"
  }
}
const getSeason = ( lat, month ) =>
{
  if ( month > 2 && month < 9 )
  {
    return lat > 0 ? "summer" : "winter";
  } else
  {
    return lat > 0 ? "winter" : "summer"
  }
}
const SeasonDisplay = props =>
{
  const season = getSeason( props.lat, new Date().getMonth() )
  const { text, iconName } = seasonConfig[season]  // {text, iconName}
  return ( <div className={ `season-display ${ season }` }>
    <i className={ `icon-left massive ${ iconName } icon` }></i>
    <h1>{ text }</h1>
    <i className={ `icon-right massive ${ iconName } icon` }></i>
  </div>
  )
};

export default SeasonDisplay;

// export default class SeasonDisplay extends React.Component
// {

//   state = {
//     lat: null,
//     error: "",
//   };

//   componentDidMount()
//   {
//     window.navigator.geolocation.getCurrentPosition(
//       ( position ) =>
//       {
//         this.setState( { lat: position.coords.latitude } );
//       },
//       ( err ) =>
//       {
//         this.setState( { error: err.message } );
//       }
//     );
//   }

//   render()
//   {
//     if ( this.state.error && !this.state.lat )
//     {
//       return <div> Error: { this.state.error } </div>
//     }
//     if ( !this.state.error && this.state.lat )
//     {
//       return <div>Lat: { this.state.lat }</div>
//     }
//     return <div>Loading</div>
//   }

// }



























// let cars = ["BENZ", "POLO", "BMW", "VOLVO", "TOYOTA", "FORD"];

// function removeElement(arr, el) {
//   el = el.toLowerCase();
//   console.log(el);
//   for (let i = 0; i < arr.length; i++) {
//     if (el === arr[i].toLowerCase()) {
//       arr.splice(i, 1);
//     } else {
//       console.log(arr);
//     }
//   }
//   return arr;
// }

// removeElement(cars, "PoLO");

// function loop(x) {
//   if (x >= 10) {
//     return;
//   } else {
//     console.log(x);
//     loop(x + 1);
//   }
// }
// loop(5);
