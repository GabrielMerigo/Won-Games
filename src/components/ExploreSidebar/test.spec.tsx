import { userEvent } from '@storybook/testing-library'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSidebar from './'

import items from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sort by/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument();
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
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
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
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /Filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
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
    userEvent.click(screen.getByRole('button', { name: /Filter/i }));

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
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

    userEvent.click(screen.getByRole('button', { name: /Filter/i }));
    expect(onFilter).toHaveBeenCalledWith({ sort_by: 'high-to-low' });
  })
})
