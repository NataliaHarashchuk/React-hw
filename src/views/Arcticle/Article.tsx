import React from 'react'
import './Article.scss'

type ArticleProps = {
  title: string;
  text: string;
};

function Article({ title, text }: ArticleProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Article