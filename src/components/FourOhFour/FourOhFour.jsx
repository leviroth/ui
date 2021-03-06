import React from 'react';
import strings from 'lang';
import styles from './FourOhFour.css';

export default () => (
  <div className={styles.container}>
    <img src="/assets/images/sad.gif" role="presentation" />
    <div className={styles.message}>
      {strings.error_four_oh_four_message}
    </div>
    <div className={styles.FourOhFour}>
      {strings.error} 404
    </div>
  </div>
);
