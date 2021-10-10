import React from 'react';
import styles from './HomepageVideo.module.css';

export default function HomepageVideo() {
  return (
    <section className={styles.featuresVideo}>
      <div className="container">
        <div className="row">
          <img src="https://raw.githubusercontent.com/opcr-io/policy/main/assets/demo-policy.gif" alt="usage video" />
        </div>
      </div>
    </section>
  );
}
