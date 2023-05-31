import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavList, NavigationLink } from './ShaderLayout.sytled';
import Loader from 'components/loaders/Loader';

const ShaderLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavList>
            <li>
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
          </NavList>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default ShaderLayout;
