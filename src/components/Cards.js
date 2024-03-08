import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='have a calming effect on the mind, reduce stress, and improve mood. Nature has a way of putting things into perspective and can be incredibly therapeutic for individuals dealing with depression.'
              label='Woods'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='can offer a distraction from obsessive thoughts and compulsive behaviors by engaging the mind in strategic thinking and social interaction. These games can help reduce stress and provide a sense of connection with others, which is beneficial for someone dealing with OCD. '
              label='Social Activities'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='swimming, floating, or simply walking by the sea can have a soothing effect on the mind. The rhythmic sound of waves and the vastness of the sea can help individuals with PTSD feel more grounded and present, reducing symptoms of anxiety and hyperarousal.'
              label='Sea'
              path='/services'
            />
            
            <CardItem
              src='images/img-8.jpg'
              text='Experience Camel riding or safari help feeling the freedom of the desert so it makes the atmosphere less pressured, more energitec and free to move to those who experience ADHD'
              label='Desert'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;