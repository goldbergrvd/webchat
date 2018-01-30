import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase'
import './MessageForm.css'

export class MessageForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    addMessage: PropTypes.func.isRequired,
    focus: PropTypes.bool
  }

  componentDidUpdate() {
    if (this.props.focus) {
      this.refs.input.focus();
    }
  }

  onSubmit = (evt) => {
    evt.preventDefault()

    let message = this.refs.input.value.trim()
    if (message) {
      firebase.database().ref('users/' + this.props.name).set({
        text: message,
        timestamp: + new Date()
      })
      this.refs.input.value = ""
    }
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.onSubmit}>
        <input ref="input" type="text" placeholder={this.props.name ? `嗨${this.props.name}，想說什麼呢？` : ''} />
        <button>送出</button>
      </form>
    )
  }
}
