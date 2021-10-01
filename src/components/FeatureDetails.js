import React from 'react';
import clsx from 'clsx';
import styles from './FeatureDetails.module.css';

const FeatureDetailsList = [
  {
    title: 'Build, tag, push, and pull policy images',
    Svg: require('../../static/img/Section-1.svg').default,
    description: (
      <pre className={styles.featureDetailsCode}>
        $ policy build . -t mytenant/peoplefinder:1.0.0<br/>
        $ policy tag mytenant/peoplefinder:1.0.0 mytenant/peoplefinder<br/>
        $ policy push mytenant/peoplefinder<br/>
        $ policy pull mytenant/peoplefinder<br/>
      </pre>
    ),
  },
  {
    title: 'Sign layers and verify signatures',
    Svg: require('../../static/img/Section-2.svg').default,
    description: (
      <pre className={styles.featureDetailsCode}>
        $ cosign init<br/>
        $ cosign generate-key-pair<br/>
        $ cosign sign -key cosign.key mytenant/peoplefinder:1.0.0<br/>
        $ cosign verify -key cosign.pub mytenant/peoplefinder:1.0.0<br/>
      </pre>
    ),
  },
  {
    title: 'Test your policy version with a read-eval-print loop',
    Svg: require('../../static/img/Section-3.svg').default,
    description: (
      <pre className={styles.featureDetailsCode}>
        $ policy run mytenant/peoplefinder:1.0.0<br/>
        {`>> ‘{“foo”: “bar”}’`}<br/>
        {`>> querty input`}<br/>
      </pre>
    ),
  },
];

function FeatureDetail({Svg, title, description, flip, index}) {
  const id = `feature_${index}`
  console.log(id)
  return (
    flip ?
      <div id={id} className={`${styles.stripe} row padding-vert--xl`}>
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
      <div id={id} className={`row padding-vert--xl`}>
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
          <FeatureDetail key={idx} index={idx} flip={idx % 2} {...props} />
        ))}
      </div>
    </section>
  );
}
