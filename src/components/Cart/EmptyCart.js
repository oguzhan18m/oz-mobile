import React from 'react';
import gif from '../../emptycart.gif';
import {ButtonContainer} from '../Button';
import {Link} from 'react-router-dom';

export default function EmptyCart() {
    return (
        <div className='container mt-5'> 
            <div className='row'>
                <div className='col-10 mx-auto text-center text-title mt-5'>
                <h2 className='empty'>Your Cart is Currently Empty {' '}
                 
                 <br />
                 <img src={gif} className='gif mt-5' />
                </h2>

                <br/>

                <Link to='/'>
                <ButtonContainer> 
                    Go back to Store
                </ButtonContainer>

                </Link>

                
                


                </div>
            </div>
        </div>
    )
}
