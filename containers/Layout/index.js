import React from 'react';
import PropTypes from 'prop-types';

import { Navbar} from '../../components';
import { ContainerBody } from './styled';

function Layout({ children }) {
  return (
    <ContainerBody>
      <Navbar />
      {children}
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;