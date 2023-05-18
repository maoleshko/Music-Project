import React from 'react'
import styles from './toggler.module.css'

const Toggle = ({ value, onChange }) => (
  <label className={styles.switch} htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
  </label>
)

export default Toggle