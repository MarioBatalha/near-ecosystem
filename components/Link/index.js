import React from 'react';

import PropTypes from 'prop-types';
import Link from 'next/Link';

import styles from '../Navbar/Navbar.module.css';

const NextLink = ({href, children}) => {
    return (
        <Link href={href} passHref>
         <a className={styles.navLinks}>
            {children}
         </a>
        </Link>
    )
}

export default NextLink;

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}