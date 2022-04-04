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
                    <p className='concept-body'>I'm a Danish UX Designer living in Nishinomiya, Japan with my wife and our 3 year old son. 
                    I have two superpowers: Empathy and Problem Solving!I am passionate about creating better products and services 
                    for everyone, not just “target groups”. Through the past 15 years as a freelance web designer, I have learned 
                    and used many elements and principles of UX Design. Now I am focusing on UX Design full time as 
                    this is my true passion!When I am not thinking or dreaming about UX Design, I love to travel with my wife 
                    and son and, depending on the destination, go scuba diving.</p>
                </div>
            </div>
            <div className='middle-frame'>Middle Frame</div>
            <div className='right-frame'>Middle Frame</div>
        </div>
    </Layout>
    )
}

export default AboutPage;