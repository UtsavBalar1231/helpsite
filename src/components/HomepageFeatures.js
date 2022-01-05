import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn with Ease',
    Svg: require('../../static/img/laptop.svg').default,
    description: (
      <>
        Helpsite is created with a focus on learning. I believe that learning is a key part of the success of any
        subject. You can find all the help regarding any subject you want.
      </>
    ),
  },
  {
    title: 'Projects easy to use',
    Svg: require('../../static/img/chatting.svg').default,
    description: (
      <>
        Helpsite lets you get access to all my projects you want. You can find all the projects I have completed on my Github repository.
        or contact me directly through any of the below community platforms.
      </>
    ),
  },
  {
    title: 'Tutorials for twats',
    Svg: require('../../static/img/video-calling.svg').default,
    description: (
      <>
        Extend your learning by reading various Tutorials across different learning websites.
        Make yourself comfortable with the tutorials before appearing in exams or lectures.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
