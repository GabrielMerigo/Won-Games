import { userEvent } from '@storybook/testing-library'
import { screen } from '@testing-library/react'
import { css } from 'styled-components'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from './'

import items from './mock'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sort by/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /platforms/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

    expect(screen.getByRole('checkbox', { name: /Under \$50/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeInTheDocument();
  })


  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  })

  it('should check inital values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ platforms: ['windows', 'linux'], sort_by: 'low-to-high' }}
        onFilter={jest.fn()}
      />
    );

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked();
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked();
  });

  it('should filter with initial values ', () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ platforms: ['windows', 'linux'], sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /Filter/i }))

    expect(onFilter).toBeCalledWith({ platforms: ['windows', 'linux'], sort_by: 'low-to-high' })
  });

  it('should filter with checked values ', () => {
    const onFilter = jest.fn();

    renderWithTheme(
      <ExploreSidebar
        items={items}
        onFilter={onFilter}
      />
    );

    userEvent.click(screen.getByRole('checkbox', { name: /windows/i }));
    userEvent.click(screen.getByRole('radio', { name: /low to high/i }));
    userEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toHaveBeenCalledTimes(3);
    expect(onFilter).toBeCalledWith({ platforms: ['windows'], sort_by: 'low-to-high' })
  })

  it('should altern radio options', () => {
    const onFilter = jest.fn();
    renderWithTheme(
      <ExploreSidebar
        items={items}
        onFilter={onFilter}
      />
    );

    userEvent.click(screen.getByLabelText(/low to high/i));
    userEvent.click(screen.getByLabelText(/high to low/i));

    expect(onFilter).toHaveBeenCalledWith({ sort_by: 'high-to-low' });
  })

  it('should open/close sidebar when is filtering on mobile', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar
        items={items}
        onFilter={jest.fn}
      />
    );

    const variant = {
      media: '(max-width: 768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild;
    expect(Element).not.toHaveStyleRule('opacity', '1', variant);
    userEvent.click(screen.getByLabelText(/open filters/i));

    expect(Element).toHaveStyleRule('opacity', '1', variant);
    userEvent.click(screen.getByLabelText(/close filters/i));
    expect(Element).not.toHaveStyleRule('opacity', '1', variant);

    userEvent.click(screen.getByRole('button', { name: /filter/i}));
    expect(Element).not.toHaveStyleRule('opacity', '1', variant);
  })
})
