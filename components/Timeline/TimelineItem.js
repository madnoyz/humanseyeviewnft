import React from 'react';
import styles from './TimelineItem.module.css';

const TimelineItem = ({ data }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemContent}>
        <span
          className={styles.tag}
          style={{ background: data.category.color }}
        >
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        <p>{data.text}</p>
        <span className={styles.circle}></span>
      </div>
    </div>
  );
};
export default TimelineItem;
