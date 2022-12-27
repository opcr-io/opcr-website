import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageVideo from '../components/HomepageVideo';
import FeatureDetails from '../components/FeatureDetails';
import NewsletterSignUp from '../components/NewsletterSignUp';
import CNCF from '../components/CNCF';
const Svg = require('../../static/img/Lottie-200.svg').default;
import FlexBanner from "flex-banner";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Svg className={styles.heroSvg} alt={siteConfig.title} />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-horiz--md"
            to="/docs/cli/download">
            Get the CLI
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <FlexBanner
        title="⭐️ Star on GitHub to follow ⭐️"
        ctaLink="https://github.com/opcr-io/policy"
        animationTime={0}
        delayToShowBanner={0}
        isCenter={true}
        crossIconSize={20}
        wrapperStyle={{ backgroundColor: '#215E60' }}
        mainStyleTitle={{ textDecoration: "none", fontSize: "1.2rem" }}
      />
      <Layout
        title={`Welcome to ${siteConfig.title}`}
        description="A docker workflow for OPA policies">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <HomepageVideo />
          <FeatureDetails />
          <CNCF />
          <NewsletterSignUp />
        </main>
      </Layout>
    </>
  );
}
