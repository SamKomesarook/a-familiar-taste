import React, { Component, useState } from 'react';
import styles from './TextInput.module.css';

export default function TextInput() {
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('New');

  return (
    <textarea
      className={styles.Input}
      id={1}
      rows={5}
      type="text"
      value={value}
      placeholder={label}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
