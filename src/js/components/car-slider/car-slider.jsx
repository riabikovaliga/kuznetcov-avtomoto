import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {carDetails} from '../../types/types';

const CarSlider = (props) => {
  const {carInfo, activeSlide, onLeftArrowClick, onRightArrowClick} = props;
  const {photos, photosPreview, newModel} = carInfo;

  return <Fragment>
    <div className="car-card__slider slider">
      <ul className="slider__list">
        {photos.map((photo, index) => {
          return <li key={index} className={`slider__item ${(index === activeSlide) ? `slider__item--active` : ``}`}>
            <img className="slider__image" src={photo} width="600" height="375" alt="Фото автомобиля"></img>
            {(newModel) && <p className="slider__text">New model</p>}
          </li>;
        })}
      </ul>
      <div className="slider__controls">
        <button type="button" className="slider__button" onClick={onLeftArrowClick} disabled={activeSlide === 0}>
          <svg width="20" height="13" viewBox="0 0 20 13" className="slider__arrow-icon-left">
            <use xlinkHref="#arrow-left"></use>
          </svg>
          <span className="visually-hidden">Слайдер влево</span>
        </button>
        <ul className="slider__img-list">
          {photosPreview.map((photo, index) => {
            return <li key={index} className={`slider__img-item ${(index === activeSlide) ? `slider__img-item--active` : ``}`}>
              <img className="slider__img" src={photo} width="128" height="80" alt="Мини фото автомобиля"></img>
            </li>;
          })}
        </ul>
        <button type="button" className="slider__button" onClick={onRightArrowClick} disabled={activeSlide === photos.length - 1}>
          <svg width="20" height="13" viewBox="0 0 20 13" className="slider__arrow-icon-right">
            <use xlinkHref="#arrow-right"></use>
          </svg>
          <span className="visually-hidden">Слайдер враво</span>
        </button>
      </div>
    </div>
  </Fragment>;
};

CarSlider.propTypes = {
  carInfo: carDetails,
  activeSlide: PropTypes.number.isRequired,
  onLeftArrowClick: PropTypes.func.isRequired,
  onRightArrowClick: PropTypes.func.isRequired,
};

export default CarSlider;
