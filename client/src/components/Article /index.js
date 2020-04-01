import React from 'react';
import  data  from './data'
import styles from './Aricle.module.scss'

class Article extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: data.map(data => ({...data})),
    };
  }

  render() {
    const {items} = this.state;
    return (
        <article className={styles.container}>
          {
            items.map(data => (
                <div key={data.id} className={styles.ColumnContainer}>
                  <h1 className={styles.headerArticle}>{data.title}</h1>
                  <p className={styles.article}>{data.body}</p>
                </div>
            ))
          }
        </article>
    );

  }
}
export default Article