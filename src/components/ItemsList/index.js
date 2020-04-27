import React from 'react';
import styles from './style.module.scss';
import { Component } from 'react';
import cx from 'classnames';

const items = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.`,
];

class ItemsList extends Component {
  state = {
    isCollapsed: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const listClass = cx(styles.list, {
      [styles.isCollapsed]: this.state.isCollapsed,
    });

    return (
      <div>
        <button onClick={this.toggle} className='button is-dark'>
          Collapse
        </button>
        <ul className={listClass}>
          {items.map((item, index) => (
            <li key={index} className='notification is-primary'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
