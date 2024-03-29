import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from './'
import mockItems from './mock';

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(<CartList items={mockItems} total="R$ 330,00" />);
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getByText(/R\$ 330,00/i)).toBeInTheDocument();
    expect(screen.getByText(/Total/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 330,00" hasButton />);

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  })

  it('should render empty if there no games', () => {
    renderWithTheme(<CartList />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  })
})
