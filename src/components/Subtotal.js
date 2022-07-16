import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../state/reducers/reducer';
import './styles/Subtotal.css'

const Subtotal = () => {

    const navigate = useNavigate();

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong> {value} </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType="text"
                thousandSeperator={true}
                prefix={"$"}
            />

            <button onClick={e => navigate('/payment')} className="subtotal__proceed">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal