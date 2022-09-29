import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers';
import filterItemsMock from '../../components/ExploreSidebar/mock';
import { MockedProvider } from '@apollo/client/testing';

import Games from '.'
import React from 'react';

import { fetchMoreMock, gamesMock } from './mocks';
import { userEvent } from '@storybook/testing-library';
import apolloCache from 'utils/apolloCache';

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">
        {children}
      </div>
    }
  }
});

jest.mock('../../components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ExploreSidebar"></div>
    }
  }
});

describe('<Games />', () => {
  it('should render loading when starting the template ', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  })

  it('should render sidebar, games cards and button show more ', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          gamesMock
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    // it starts without data
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // get => quando temos certeza do dado
    // query => quando não tem o elemento
    // find => processos assincronos
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument();
    expect(await screen.findByText(/RimWorld/i)).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: /show more/i })).toBeInTheDocument();
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          gamesMock,
          fetchMoreMock
        ]}
        cache={apolloCache}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );


    userEvent.click(await screen.findByRole('button', { name: /show more/i }));
    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  })
})
