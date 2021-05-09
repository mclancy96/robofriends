import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import {robots} from './robots'

ReactDOM.render(
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    </div>
 , document.getElementById('root')
);

