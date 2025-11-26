import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unified User Profiles',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // replace with your SVG
    description: (
      <>
        MyAccess gives each user a centralized profile to manage devices, track rewards, 
        and connect to available modules in one secure place.
      </>
    ),
  },
  {
    title: 'Digital Rewards',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // replace with your SVG
    description: (
      <>
        Earn <code>currency_crystal</code> by activating modules, participating in events, 
        or connecting games. Spend your crystals in our digital store or future services.
      </>
    ),
  },
  {
    title: 'MyID Prototype',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // replace with your SVG
    description: (
      <>
        Activate MyID to claim 500 initial <code>currency_crystal</code> and prepare for future 
        game integrations and connected services.
      </>
    ),
  },
  {
    title: 'Secure Sessions',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // replace with your SVG
    description: (
      <>
        Custom session management ensures your data is safe. Cookies and server-side checks 
        protect your account at all times.
      </>
    ),
  },
  {
    title: 'Expandable Modules',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // replace with your SVG
    description: (
      <>
        MyAccess is modular: QR Login, Devices, Hub, and Games can be added or extended 
        without disrupting the platform.
      </>
    ),
  },
  {
    title: 'Future-Proof Platform',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // replace with your SVG
    description: (
      <>
        Designed to grow with your needs, MyAccess will integrate games, apps, and other 
        digital services seamlessly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
