import React from 'react';

type AppHeaderProps = {
  children: React.ReactNode;
};
function AppHeader({ children }: AppHeaderProps): JSX.Element {
  return (
    <header>
      <h1>My awesome shop</h1>
      {children}
    </header>
  );
}

export default AppHeader;
