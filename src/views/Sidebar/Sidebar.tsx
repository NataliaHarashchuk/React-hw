import React from 'react'
import Topic from '../Topic/Topic';
import './Sidebar.scss'

type TopicType = {
  title: string;
  text: string;
  link:string;
};

type TopicesProps = {
  topices: TopicType[];
};

const Sidebar = ({topices}:TopicesProps) => {
  return (
    <nav>
        {topices.map((topic, index)=>(<Topic 
        key={index}
        title={topic.title}
        link={topic.link}
        />))}
    </nav>
  )
}

export default Sidebar