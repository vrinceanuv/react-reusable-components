import React, { Component } from 'react';
import {Checkbox, Date, Input, Radio, Select, Textarea, Card} from './components';
import './Demo.css';

class Demo extends Component {
  render() {
    return (
      <div className="components">
        <header>
          <h1 className="project-title">React Reusable Components</h1>
        </header>

        <Card />
      </div>
    );
  }
}

export default Demo;
