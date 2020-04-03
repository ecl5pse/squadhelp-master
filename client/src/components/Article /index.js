import React  from 'react';
import data   from './data';
import styles from './Aricle.module.scss';

const items = data.map(data => ({...data}));

const Article = props => {

  return (
      <article className={styles.container}>
        {
          items.map(texts => (
              <div key={texts.id} className={styles.ColumnContainer}>
                <h1 className={styles.headerArticle}>{texts.title}</h1>
                <p className={styles.article}>{texts.body}</p>
              </div>
          ))
        }
      </article>
  );
};
export default Article;