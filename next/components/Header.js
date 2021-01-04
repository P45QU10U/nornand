import React from 'react';

import Menu from './menu';
import { Container } from './designSystem/layout';

export default function Header() {
  return (
    <Container bgColor="bg-orange-600" className="sticky top-0 z-20 opacity-80">
      <header className="flex top-0 sticky align-items justify-between max-w-6xl mx-auto">
        <Menu />
      </header>
    </Container>
  );
}
