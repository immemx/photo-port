import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '../'

describe('contact component', () => {

    it('renders', () => {
      render(<Contact/>);
    });
  
  });