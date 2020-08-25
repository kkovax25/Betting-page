import React from 'react';
import { Slide, Slider, Caption } from 'react-materialize';

const Header = () => {
  return (
    <Slider
      options={{
        duration: 500,
        height: 500,
        interval: 6000
      }}
    >
      <Slide image={<img alt="headerImg" src='/img/headerPictures/1.jpg' />}>
        <Caption placement="center" >
          <h3 style={{ fontFamily: 'Russo One' }}>
            BET<img src='/img/gameEventIcons/goal.svg' style={{ height: '20px' }} alt='logo' />ONE
          </h3>
          <h5>
            <cite>“Money won is twice as sweet as money earned.”</cite>
          </h5>

        </Caption>
      </Slide>
      <Slide image={<img alt="headerImg" src='/img/headerPictures/2.jpg' />}>
        <Caption placement="right">
          <h3>
            Get all the results you need
          </h3>
          <h5 className="light grey-text text-lighten-3">
            For more then 600 leagues
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="headerImg" src='/img/headerPictures/3.jpg' />}>
        <Caption placement="left" style={{ marginTop: '100px' }}>
          <h3>
            Lorem ipsum dolor sit amet
          </h3>
          <h5 className="light grey-text text-lighten-3">
            Lorem ipsum dolor sit amet
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="headerImg" src='/img/headerPictures/4.jpg' />}>
        <Caption placement="left" style={{ marginLeft: '-50px', color: '#9B010F' }}>
          <h3>
            More Coming Soon...
          </h3>
          <h5>
            Get ready for the NBA
          </h5>
        </Caption>
      </Slide>
    </Slider>
  )
}

export default Header
