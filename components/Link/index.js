import React from 'react';

import PropTypes from 'prop-types';
import Link from 'next/Link';

const Link = ({href, children}) => {
    return (
        <Link href={href} passHref>
         <a>
            {children}
         </a>
        </Link>
    )
}

export default Link;

Link.proTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}