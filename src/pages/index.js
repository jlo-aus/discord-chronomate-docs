import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Storage Channel',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Keep icons stored where they are used - on Discord.
        Change the icon at any time to any of the stored icons.
        Set the channel as public to allow other users to contribute their own icons.
      </>
    ),
  },
  {
    title: 'Scheduled Icon Changes',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Schedule icon changes for any date on the calendar and
        Chronomate will take care of the rest.
      </>
    ),
  },
  {
    title: 'Timezone Aware',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Chronomate uses Coordinated Universal Time (UTC) by default. 
        Change the timezone to best match you and your Discord server.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt={'Logo'}
              className={styles.heroLogo}
              src={useBaseUrl('/img/logo.svg')}
            />
            <span
              className={styles.heroTitleTextHtml}
              dangerouslySetInnerHTML={{
                __html: '<b>Automate</b> your Discord server <b>icon</b> with <b>calendar</b> based <b>scheduling</b>',
              }}
            />
          </h1>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs">
              Get Started
            </Link>
            <Link
              className="button button--outline button--info"
              to="#">
              Invite Chronomate
            </Link>
          </div>
        </div>
      </div>


      {/* <header className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--5 col--offset-2')}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--primary button--lg margin-right--md',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  Get Started
                </Link>
                <Link
                  className={clsx(
                    'button button--info button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  Invite Now
                </Link>
              </div>
            </div>
            <div className={clsx('col col--3', styles.heroImageContainer)}>
              <img className={styles.heroImage} src="img/logo.svg" />
            </div>
          </div>
        </div>
      </header> */}

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
