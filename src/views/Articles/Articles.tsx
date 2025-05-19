import React from 'react'
import Article from '../Arcticle/Article';

type ArticleType = {
  title: string;
  text: string;
};

type ArticlesProps = {
  articles: ArticleType[];
};

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className='articles-container'>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          text={article.text}
        />
      ))}
    </div>
  );
};

export default Articles