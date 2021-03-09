import React from 'react';
import { getCollectionBySlug } from 'utils';
import { Layout, Team as TeamContainer } from '../../containers';

function Planetas(props) {
    console.log(props);
    return (
        <Layout>
            <TeamContainer data={props} />
        </Layout>
    );
}

export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    const data = await getCollectionBySlug(slug,'planetas',res)
    return { props: data }
}


export default Planetas;
