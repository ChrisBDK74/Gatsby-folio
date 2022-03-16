import * as React from 'react';
import Layout from "../components/layout";
import   './css/about.css';


const AboutPage = () => {
    return (
    <Layout pageTitle="">
        <div className='about-container'>
            <div className='left-frame'>
                <div className='concept'>
                    <h2 className='concept-title'>Concept</h2>
                    <p className='concept-body'>Sed nunc <span>turpis</span>, fringilla ut egestas tristique, molestie tincidunt tortor. 
                        Phasellus scelerisque facilisis tellus, sit amet viverra tellus ullamcorper at. 
                        Sed pretium lacinia metus, rhoncus egestas velit cursus id. Ut efficitur viverra 
                        nunc ac laoreet. Nulla venenatis ultrices congue. Duis eget scelerisque lectus. 
                        Mauris quis viverra tortor.</p>
                </div>
            </div>
            <div className='middle-frame'>Middle Frame</div>
            <div className='right-frame'>Middle Frame</div>
        </div>
    </Layout>
    )
}

export default AboutPage;