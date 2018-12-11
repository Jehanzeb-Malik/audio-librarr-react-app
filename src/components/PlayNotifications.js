import React from 'react';
import moment from 'moment';
import faker from 'faker';

import {socket} from "../config/socket";

class PlayNotification extends React.Component {

  state = {
    notifications: []
  };

  componentDidMount() {
    socket.on('playNotification', (data) => {
      data.date = moment();
      this.setState({notifications: [...this.state.notifications, data]});
    })
  }

  renderNotifications() {
    return this.state.notifications.map(message => {
      return (
          <div className="comment">
            <div className="avatar">
              <img alt={message.user} src={faker.image.avatar()} />
            </div>
            <div className="content">
              <div className="author">{message.user}</div>
              <div className="metadata">
                <span className="date">{message.date.fromNow()}</span>
              </div>
              <div className="text">
                {message.name}
              </div>
            </div>
          </div>
      );
    });
  }

  render() {
    return <div className="ui segment">
      <div className="ui comments">
        <h3 className="ui dividing header">Player Notifications</h3>
        {this.renderNotifications()}
      </div>
    </div>;
  }
}

export default PlayNotification;