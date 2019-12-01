import React from 'react'

import styles from './index.module.css'


export default (props) => (
  <div className={styles.container}>
    {props.children}
  </div>
)
