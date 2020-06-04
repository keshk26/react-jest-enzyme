import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { connect } from 'react-redux';

export const  Stack = ({ stack: { title, cards } }) => (
    <div>
        <Link className='link-home' to='/'>
            <h4>Home</h4>
        </Link>
        <h3>{title}</h3>
        <br />
        {cards.map(card => (
            <Card key={card.id} card={card} />
        ))}
    </div>
);

const mapStateToProps = state => ({
    stack: state.stack
})
export default connect(mapStateToProps, null)(Stack);