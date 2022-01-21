import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './index';

test('Header contains correct text', () => {
  render(<Label />);
  const text = screen.getByText('Webpack5, SWC, React and TypeScript BoilerPlate!');
  expect(text).toBeInTheDocument();
});
