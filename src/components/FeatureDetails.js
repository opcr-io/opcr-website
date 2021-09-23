import React from 'react';
import clsx from 'clsx';
import styles from './FeatureDetails.module.css';

const FeatureDetailsList = [
  {
    title: 'Build, tag, push, and pull policy images',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <pre>
        $ policy build . -t mytenant/peoplefinder:1.0.0<br/>
        $ policy tag mytenant/peoplefinder:1.0.0 mytenant/peoplefinder<br/>
        $ policy push mytenant/peoplefinder<br/>
        $ policy pull mytenant/peoplefinder<br/>
      </pre>
    ),
  },
  {
    title: 'Sign layers and verify signatures',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <pre>
        $ cosign init<br/>
        $ ...<br/>
      </pre>
    ),
  },
  {
    title: 'Test your policy version with a read-eval-print loop',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <pre>
        $ policy run peoplefinder:1.0.0<br/>
        $ input {`‘{“foo”: “bar”}’`}<br/>
        $ query data<br/>
      </pre>
    ),
  },
];

function FeatureDetail({Svg, title, description, flip}) {
  console.log(flip)
  return (
    flip ?
      <div className={`${styles.stripe} row padding-vert--md`}>
        <div className={clsx('col col--9', styles.featureDetailsText)}>
          <div className='padding-horiz--md'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className={clsx('col col--3')}>
          <div className="text--center">
            <Svg className={styles.featureDetailsSvg} alt={title} />
          </div>
        </div>
      </div> :
      <div className={`row padding-vert--md`}>
        <div className={clsx('col col--3')}>
          <div className="text--center">
            <Svg className={styles.featureDetailsSvg} alt={title} />
          </div>
        </div>
        <div className={clsx('col col--9', styles.featureDetailsText)}>
          <div className='padding-horiz--md'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div> 
      </div>
  );
}

export default function FeatureDetails() {
  return (
    <section className={styles.featureDetails}>
      <div className="container">
        {FeatureDetailsList.map((props, idx) => (
          <FeatureDetail key={idx} flip={idx % 2} {...props} />
        ))}
      </div>
    </section>
  );
}
