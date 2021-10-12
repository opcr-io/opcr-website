import React from 'react';
import clsx from 'clsx';
import styles from './FeatureDetails.module.css';

const FeatureDetailsList = [
  {
    title: 'Build, tag, push, and pull policy images',
    Svg: require('../../static/img/Section-1.svg').default,
    description: (
      <pre className={styles.featureDetailsCode}>
        {`$ policy build . -t myorg/peoplefinder:1.0.0
$ policy tag myorg/peoplefinder:1.0.0 myorg/peoplefinder
$ policy push myorg/peoplefinder
$ policy pull myorg/peoplefinder
`}
      </pre>
    ),
  },
  {
    title: 'Sign layers and verify signatures',
    Svg: require('../../static/img/Section-2.svg').default,
    description: (
      <pre className={styles.featureDetailsCode}>
        {`$ cosign init
$ cosign generate-key-pair
$ cosign sign -key cosign.key myorg/peoplefinder:1.0.0
$ cosign verify -key cosign.pub myorg/peoplefinder:1.0.0`}
      </pre>
    ),
  },
  {
    title: 'Test your policy version with a read-eval-print loop',
    Svg: require('../../static/img/Section-3.svg').default,
    description: (
      <pre className={styles.featureDetailsCode}>
        {`$ policy repl myorg/peoplefinder:1.0.0
> data.system.bundles
{
  "/Users/ogazitt/.policy/policies-root/blobs/sha256/84d...7e9": {
    "manifest": {
      "revision": "",
      "roots": [
        "peoplefinder"
      ]
    }
  }
}`}
      </pre>
    ),
  },
];

function FeatureDetail({Svg, title, description, flip, index}) {
  const id = `feature_${index}`
  return (
    flip ?
      <div id={id} className={`${styles.stripe} row padding-vert--xl`}>
        <div className={clsx('col col--9', styles.featureDetailsText)}>
          <div className='padding-horiz--md'>
            <h3>{title}</h3>
            <div>{description}</div>
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
            <div>{description}</div>
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
