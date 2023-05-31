import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavList } from './ShaderLayout.sytled';

const ShaderLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavList>
        </nav>
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default ShaderLayout;