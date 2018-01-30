import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MessageList.css'

export class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
  }

  render() {
    return (
      <p className="messages">
        {
          this.props.messages.map((message) => (
            <span className="line" key={message.id}>{
              message.text ?
              `${message.author}: ${message.text}` :
              `【${message.author}】加入聊天室！`
            }</span>
          ))
        }
      </p>
    )
  }
}
