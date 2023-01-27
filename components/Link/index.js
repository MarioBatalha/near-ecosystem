import React from 'react';

import PropTypes from 'prop-types';
import Link from 'next/Link';

import styles from '../Navbar/Navbar.module.css';

const NextLink = ({href, children}) => {
    return (
        <Link href={href} passHref className={styles.navLinks}>
            {children}
        </Link>
    )
}

export default NextLink;

NextLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}