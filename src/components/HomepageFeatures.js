import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Version your policies',
    Svg: require('../../static/img/Version-policies.svg').default,
    description: (
      <>
        Tag your policies with a semantic version, just like you would a docker container
      </>
    ),
  },
  {
    title: 'Sign your policies',
    Svg: require('../../static/img/Sign-policy.svg').default,
    description: (
      <>
        Sign your policy layers using&nbsp;
        <a href='https://github.com/sigstore/cosign'>cosign</a>, 
        an OCIv2 container signing solution from the&nbsp;
        <a href='https://www.sigstore.dev/'>sigstore</a>&nbsp;
        project in the Linux Foundation.
      </>
    ),
  },
  {
    title: 'Test policy versions',
    Svg: require('../../static/img/Test.svg').default,
    description: (
      <>
        Run a local read-eval-print loop to test your versioned policy, 
        by setting inputs and issuing queries.
      </>
    ),
  },
];

function Feature({Svg, title, description, index}) {
  return (
    <div className={clsx('col col--4')} onClick={() => document.getElementById(`feature_${index}`).scrollIntoView({ behavior: 'smooth' })}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md margin-top--md">
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
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
