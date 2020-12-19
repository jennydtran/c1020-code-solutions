import React from 'react';

function TopicListItem(props) {
  const { topic, detail } = props.topics;

  return (
    <li>
      <div className="list-container">
        <h2 onClick={props.onClick}>{topic}</h2>
        { topic === props.state.topic && props.state.view === true &&
          <p>{detail}</p>
        }
      </div>
    </li>
  );
}

class TopicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      view: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const currentTopic = event.target.textContent;

    if (currentTopic !== this.state.topic) {
      this.setState(state => ({
        topic: currentTopic,
        view: true
      }));
    } else {
      this.setState(state => ({
        topic: '',
        view: false
      }));
    }
  }

  render() {
    const { topics } = this.props;
    const TopicListItems = topics.map(topicItem =>
      <TopicListItem topics={topicItem} key={topicItem.id.toString()} onClick={this.handleClick} state={this.state}/>
    );
    return (
      <ul>{TopicListItems}</ul>
    );
  }
}

export default function Accordion(props) {
  const { topics } = props;

  return (
    <div className="container">
      <TopicList topics={topics} />
    </div>
  );
}
