import React, { PureComponent } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

interface ParsingTextboxProps {
  value?: string;
  delay?: number;
  onProcess: (value: string) => void;
  onSave: () => void;
}

interface ParsingTextboxState {
  text: string;
}

const DEFAULT_DELAY = 500;

export default class ParsingTextbox extends 
                     PureComponent<ParsingTextboxProps, ParsingTextboxState> {

  state = {
    text: this.props.value || ''
  };

  static defaultProps = {
    delay: DEFAULT_DELAY
  };

  timer = 0;

  updateTimer = (value: string) => {
    const { delay, onProcess } = this.props;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(
      () => {
        onProcess(value);
      },
      delay
    );
  }

  // TODO - implement the 500s delay to
  update = (newValue: React.FormEvent<HTMLInputElement>) => {
    const text = newValue.currentTarget.value;
    this.setState({ text }, () => this.updateTimer(text));
  }

  render() {
    const { text } = this.state;
    const { onSave } = this.props;

    return (
      <Form>
        <FormGroup>
          <Input type="textarea" value={text} onChange={this.update} />
          <Button onClick={onSave}>Save</Button>
        </FormGroup>
      </Form>
    );
  }
}

// ParsingTextbox.defaultProps = {
//   delay: DEFAULT_DELAY
// };
