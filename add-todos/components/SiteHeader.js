import Image from 'next/image'
import styles from './SiteHeader.module.css'

const name = 'Simple Todo'
const SiteHeader = () => {
  return (
      <header className={styles.header}>
          <Image
              priority
              src="/images/todo.png"
              height={144}
              width={144}
              alt={name}
          />
          <h1 className={styles.heading2Xl}>{name}</h1>
      </header>
  );
};

export default SiteHeader;
