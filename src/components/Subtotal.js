import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../state/reducers/reducer';
import './styles/Subtotal.css'

const Subtotal = () => {

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

            <button className="subtotal__proceed">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal