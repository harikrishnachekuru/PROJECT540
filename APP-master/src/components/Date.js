import React  from 'react';
import Clock from 'react-live-clock';
 
 class Date extends React.Component {
    render() {
        return(
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        );
    }
}

export default Date;
