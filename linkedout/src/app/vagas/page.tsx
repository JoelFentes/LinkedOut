// src/app/jobposting/page.tsx

'use client';

import React, { useState } from 'react';
import './vagas.css';

const Vagas = () => {
    return (
        <div className='vagas-page'>
            <input className='search-job' type="text" />
            <div className='divider'></div>
            <div className='container'>
                <div className='job-list'>
                    <div className='jobs'>
                        <h2>JobTitle</h2>
                        <p>At BairesDev®, we've been leading the way in technology projects for over 15 years. We deliver cutting-edge solutions to giants like Google and the most innovative startups in Silicon Valley.

Our diverse 4,000+ team, composed of the world's Top 1% of tech talent, works remotely on roles that drive significant impact worldwide.

When you apply for this position, you're taking the first step in a process that goes beyond the ordinary. We aim to align your passions and skills with our vacancies, setting you on a path to exceptional career development and success.

Content Creator Trainee at BairesDev

If you’re driven, passionate, and ambitious, our Content Creator Trainee Programme will let you achieve your potential. It is a real job from day one – with world-class training, international scope, and the chance to fully reach your potential.

You will be introduced, coached, and trained in multiple tools used in our Marketing department, allowing you to help us to keep our accelerated growth levels by keeping close eyes on our brand and marketing development.

We seek young and open-minded people, who want to learn how to work autonomously and who are not afraid to speak their minds. We offer a dynamic and constantly evolving environment, packed with challenges and growth opportunities.</p>
                    </div>
                </div>
                <div className='selected-job'>
                    <h1>JobTitle</h1>

                </div>
                
            </div>
        </div>
    );
};

export default Vagas;

