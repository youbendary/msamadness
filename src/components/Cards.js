import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out our Upcoming Events!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src={require('../images/card-falltourney.png')}
                        text="September 16: Brother's Community Basketball Tournament"
                        label='Fall'
                        // google form
                        path='https://docs.google.com/forms/d/1HkX2fHCA-1bBKkBt73SEnilDfLvt-RIaSqDb1Ep_XIE/viewform?ts=64053418&edit_requested=true&fbclid=PAAabSu2bbcq0Z5MzyGRgz8L9X2-bCD55VYE9a3szWyVnMrVAVPSX5gRHRP-A'
                    />
                    <CardItem 
                        src={require('../images/img-volleyball.jpg')}
                        text="Brother's and Sister's Volleyball Tournaments!"
                        label='Fall'
                        // google form
                        path='https://docs.google.com/forms/d/1HkX2fHCA-1bBKkBt73SEnilDfLvt-RIaSqDb1Ep_XIE/viewform?ts=64053418&edit_requested=true&fbclid=PAAabSu2bbcq0Z5MzyGRgz8L9X2-bCD55VYE9a3szWyVnMrVAVPSX5gRHRP-A'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src={require('../images/img-soccer.jpg')}
                        text="Brother's Inter-MSA Soccer Game!"
                        label='Fall'
                        path='https://docs.google.com/forms/d/1HkX2fHCA-1bBKkBt73SEnilDfLvt-RIaSqDb1Ep_XIE/viewform?ts=64053418&edit_requested=true&fbclid=PAAabSu2bbcq0Z5MzyGRgz8L9X2-bCD55VYE9a3szWyVnMrVAVPSX5gRHRP-A'
                    />
                    <CardItem 
                        src={require('../images/img-skiing.jpg')}
                        text='Community Ski Retreat!'
                        label='Winter'
                        path='https://docs.google.com/forms/d/1HkX2fHCA-1bBKkBt73SEnilDfLvt-RIaSqDb1Ep_XIE/viewform?ts=64053418&edit_requested=true&fbclid=PAAabSu2bbcq0Z5MzyGRgz8L9X2-bCD55VYE9a3szWyVnMrVAVPSX5gRHRP-A'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;