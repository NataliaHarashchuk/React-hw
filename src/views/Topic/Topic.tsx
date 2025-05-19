import React from 'react'
import './Topic.scss'

type TopicProps = {
  title: string;
  link: string;
};

const Topic = ({title, link}: TopicProps) => {
  return (
    <a href={link} target='blank'>{title}</a>
  )
}

export default Topic