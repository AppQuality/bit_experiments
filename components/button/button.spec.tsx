import React from 'react'
import { render } from '@testing-library/react'
import { expect } from 'chai'
import { BasicButton } from './button.composition'

describe('button', () => {
  it('should render', () => {
    const { getByText } = render(<BasicButton />)
    const rendered = getByText('Click me', { exact: false })

    expect(rendered).to.exist
  })
})