import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const COOKIE_KEY = 'NOTES';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      notes: [],
    };
  }

  componentDidMount() {
    this.setState({ notes: read_cookie(COOKIE_KEY) });
  }

  submit() {
    const { notes, text } = this.state;
    notes.push({ text });
    this.setState({ notes });
    bake_cookie(COOKIE_KEY, this.state.notes);
  }

  clear() {
    delete_cookie(COOKIE_KEY);
    this.setState({ notes: [] });
  }

  render() {
    return (
      <div>
        <h2>Note to Self</h2>
        <Form>
          <FormControl
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <br />
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        {this.state.notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
        {/* <hr /> */}
        <Button onClick={() => this.clear()}>Clear Notes</Button>
      </div>
    );
  }
}

export default App;
