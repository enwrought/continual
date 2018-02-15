import React, { PureComponent } from 'react';
import ParsingTextbox from './ParsingTextbox';

interface ftProps {
  date: string; // TODO - convert to Date object type
}

interface ftState {
}

export default class FormattingTextbox extends PureComponent<ftProps, ftProps> {

  render() {
    return (
      <ParsingTextbox />
    );
  }
}