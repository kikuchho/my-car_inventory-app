
/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import '@testing-library/jest-dom'
import Sidebar from '../SideBar';


import { useRouter } from 'next/router';




// Mock useRouter:
/*
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));
*/

const mockedUseRouter = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue("/"),

}));






it('test 2 ', async () => {
  mockedUseRouter.mockReturnValue({ query: {}})
  render(
  
    <Sidebar/>
    
  )
  const text = await screen.getByText("crooberid search")
  expect( text ).toBeInTheDocument()
  
})


/*
import Page from './page'

test('User page', async () => {
  render(
    <Suspense>
      <Page />
    </Suspense>
  )
  const heading = await screen.findByRole('heading')
  expect(heading).toHaveTextContent('Hello Gio')
})








import { render, cleanup, waitForElement } from '@testing-library/react';
import { createRouter } from 'next/router';
import { RouterContext } from 'next-server/dist/lib/router-context';

const router = createRouter('', { user: 'nikita' }, '', {
  initialProps: {},
  pageLoader: jest.fn(),
  App: jest.fn(),
  Component: jest.fn(),
});

import UserInfo from './$user';

afterEach(cleanup);

it('Should render correctly on route: /users/nikita', async () => {
  const { getByText } = render(
    <RouterContext.Provider value={router}>
      <UserInfo />
    </RouterContext.Provider>,
  );

  await waitForElement(() => getByText(/Hello nikita!/i));
});









*/