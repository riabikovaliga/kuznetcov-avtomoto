import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: `100%`,
  height: `100%`,
};

const containerStyle = {
  position: `absolute`,
  width: `431px`,
  height: `271px`,
  right: `33%`,
  top: `6px`,
};

class ContactsBlock extends PureComponent {

  render() {
    return <Fragment>
      <div className="car-card__contacts-wrapper">
        <ul className="car-card__contacts contacts">
          <li className="contacts__item">
            <p className="contacts__name contacts__name--address">Адрес</p>
            <p className="contacts__value">Санкт-Петербург,<br/> набережная реки Карповки, дом 5</p>
          </li>
          <li className="contacts__item">
            <p className="contacts__name">Режим работы</p>
            <p className="contacts__value">Ежедневно, с 10:00 до 21:00</p>
          </li>
          <li className="contacts__item">
            <p className="contacts__name">Телефон</p>
            <a className="contacts__link" href="tel:88003335599">8 (800) 333-55-99</a>
          </li>
          <li className="contacts__item">
            <p className="contacts__name">E-mail</p>
            <a className="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
          </li>
        </ul>
        <Map
          google={this.props.google}
          style={mapStyles}
          containerStyle={containerStyle}
          initialCenter={
            {
              lat: 59.968137,
              lng: 30.316263
            }
          }
          zoom={14}>

          <Marker onClick={this.onMarkerClick}
            title={`Hабережная реки Карповки, дом 5`}
            name={`Avto-moto`}
            position={{lat: 59.968137, lng: 30.316263}} />
        </Map>
      </div>
    </Fragment>;
  }
}

ContactsBlock.propTypes = {
  google: PropTypes.any,
};

export default GoogleApiWrapper({ //eslint-disable-line
  apiKey: (`AIzaSyBQuN65AmmT6r8J2DNz4IbTjw1Yu_os6mw`)
})(ContactsBlock);
