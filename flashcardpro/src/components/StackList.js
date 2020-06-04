import React, { Component } from 'react';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

import { connect } from 'react-redux';

export class StackList extends Component {
    componentDidMount() {
        if (!this.props.stacks.length) {
            this.props.loadStacks(stacks);
        }
    }
    render() {
        return (
            <div>
                {this.props.stacks.map(stack => (
                    <Link 
                      key={stack.id} 
                      to='/stack'
                      onClick={() => this.props.setStack(stack)}
                    >
                        <h4>{stack.title}</h4>
                    </Link>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stacks: state.stacks
})
export default connect(mapStateToProps, { setStack, loadStacks })(StackList);