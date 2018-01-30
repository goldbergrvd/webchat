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
          this.props.messages.reverse().map((message, i) => (
            <span className="line" key={i}>{`${message.author}: ${message.text}`}</span>
          ))
        }
      </p>
    )
  }
}
