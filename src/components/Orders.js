import React, { useEffect } from 'react'
import './styles/Orders.css'
import { useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../context/StateProvider';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue


    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        }
        else {
            setOrders([])
        }
    }, [user])


    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => {

                })}
            </div>
        </div>
    )
}

export default Orders