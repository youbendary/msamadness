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
                        src={require('../assets/images/img-bball2.jpg')}
                        text="Brother's Community Basketball Tournament"
                        label='Fall'
                        // google form
                        path='http://google.com'
                    />
                    <CardItem 
                        src={require('../assets/images/img-volleyball.jpg')}
                        text="Brother's and Sister's Volleyball Tournaments!"
                        label='Fall'
                        // google form
                        path='http://google.com'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src={require('../assets/images/img-soccer.jpg')}
                        text="Brother's Inter-MSA Soccer Game!"
                        label='Fall'
                        path='http://google.com'
                    />
                    <CardItem 
                        src={require('../assets/images/img-skiing.jpg')}
                        text='Community Ski Retreat!'
                        label='Winter'
                        path='http://google.com'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;