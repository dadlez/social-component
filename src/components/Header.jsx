import React, { Component } from 'react';
import styled from 'styled-components';
import { fetchData, RESOURCES } from '../utils';
import Picture from './Header/Picture';
import ShareButton from './Header/ShareButton';
import InfoField from './Header/InfoField';
import ActionsField from './Header/ActionsField';

const Header = styled.section`
  position: relative;
  ${props => `height: ${props.screenSize === 'small' ? '235px' : '183px'}`}
  transition: height 0.2s;
  margin: auto 17px 15px 17px;
  padding: 0 20px;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default class HeaderSection extends Component {
  state = {
    counters: {
      likes: 0,
      following: 0,
      followers: 0
    }, 
    person: {
      picture: {
        url: '',
        alt: ''
      },
      name: '',
      location: ''
    }
  }

  componentDidMount() {
    // put counters into person object and seperate it on fetching data
    fetchData(RESOURCES.PERSON)
      .then(({ likes, following, followers, ...person }) => this.setState({ 
        person, 
        counters: { likes, following, followers }
      }))
      .catch(error => console.error('Fetching data failed with error:', error))
  }

  updateState = (data) => {
    this.setState(Object.assign({}, this.state, data));
  }
  //TODO use update from immutable lib

  increaseCounter = (key) => {
    const value = this.state.counters[key] + 1;

    this.updateState({ counters: Object.assign(
      {}, 
      this.state.counters, 
      { [key]: value }) 
    });
  }

  render() {
    return (
      <Header screenSize={this.props.screenSize}>
        <Picture {...this.state.person.picture} screenSize={this.props.screenSize} />
        <ShareButton />
        <InfoField 
          increaseCounter={this.increaseCounter} 
          screenSize={this.props.screenSize}
          {...this.state.person}
        />
        <ActionsField 
          counters={this.state.counters} 
          increaseCounter={this.increaseCounter}
          screenSize={this.props.screenSize}
        />
      </Header>
    );
  }
}
