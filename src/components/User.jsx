import React, { PureComponent } from 'react';

export class User extends PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('DID MOUNT', this.props.name)
  }
  componentDidUpdate(prevProps) {
    console.log('DID UPDATE', prevProps.name, '=>', this.props.name)
  }
  componentWillUnmount() {
    console.log('WILL UNMOUNT', this.props.name)
  }
  render() {
    return (
      <span>{this.props.name}</span>
    );
  }
}







