import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sai Sandeep Koritala</div>
      <div className={styles.text}>
        Sai Sandeep creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
