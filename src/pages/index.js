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
    imageUrl: 'img/storage.svg',
    description: (
      <>
        Store icons where they are used - in your guild.
        Change the icon at any time to any of the stored icons.
      </>
    ),
  },
  {
    title: 'Scheduled Icon Changes',
    imageUrl: 'img/schedule.svg',
    description: (
      <>
        Schedule icon change tasks for any date on the calendar and
        Chronomate will take care of the rest.
      </>
    ),
  },
  {
    title: 'Timezone Aware',
    imageUrl: 'img/clock.svg',
    description: (
      <>
        Chronomate uses Coordinated Universal Time (UTC) by default. 
        Change the timezone to best match you and your Discord guild.
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
      description="Automate your Discord guild icon with calendar based scheduling">

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
                __html: '<b>Automate</b> your Discord  guild <b>icon</b> with <b>calendar</b> based <b>scheduling</b>',
              }}
            />
          </h1>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs">
              Get Started
            </Link>
            <Link
              className="button button--outline button--info"
              to="https://discord.com/api/oauth2/authorize?client_id=505166442338058251&permissions=3104&scope=bot%20applications.commands">
              Invite Chronomate
            </Link>
          </div>
        </div>
      </div>

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
