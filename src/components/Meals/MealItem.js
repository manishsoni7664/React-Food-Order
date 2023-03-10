import React from 'react';
import './MealItem.css'
import MealItemForm from './MealItemForm';

function MealItem(props) {
  return (
    <li className={`meal ${props.className}`}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className='description'>{props.meal.description}</div>
        <div className='price'>$ {props.meal.price?.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm
          mealId={props.meal?.id}
          quantity={props?.meal?.orderQuantity}
        />
      </div>
    </li>
  )
}

export default MealItem;