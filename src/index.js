import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components';
import content from './config/content.json';

ReactDOM.render(<App content={content} />, document.getElementById('root'));