import React from 'react'
import { render } from 'react-dom'

import './stores/PokedexStore'

import Layout from './components/Layout'

render(
  <Layout/>,
  document.getElementById('root')
);
