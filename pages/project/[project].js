import React from 'react';
import { useRouter } from 'next/router';

const Project = () => {
    const router = useRouter();
    const projectId = router.query.projectId;
    return (
        <>
            <h1 style={{color: '#000'}}>Projects page {projectId}</h1>
        </>
    )
}

export default Project;