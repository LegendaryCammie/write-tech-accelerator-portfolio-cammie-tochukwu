import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Clear and Simple',
    Svg: require('@site/static/img/undraw_chat-with-ai_ir62.svg').default,
    description: (
      <>
        No jargon, no clutter. Just straightforward explanations that helps you 
        understand concepts (software) without feeling overwhelmed 
      </>
    ),
  },
  {
    title: 'Mordern Docs',
    Svg: require('@site/static/img/undraw_saving-notes_wp71.svg').default,
    description: (
      <>
        Built with a <strong>Docs-as-Code</strong> approach — using version
      control, Markdown, and automation — to keep things structured and
      reliable.
      </>
    ),
  },
  {
    title: 'Made With Heart',
    Svg: require('@site/static/img/undraw_loving-it_hspq.svg').default,
    description: (
      <>
        Every page is crafted with <em>clarity, care, and coffee ☕</em> — so even technology feels gentle, 
        supportive, and human
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
