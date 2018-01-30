import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from '../firebase'
import './LoginForm.css'

export class LoginForm extends Component {
  static propTypes = {
    setName: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.refs.input.focus()
  }

  onSubmit = (evt) => {
    evt.preventDefault()

    let name = this.refs.input.value.trim()
    if (name) {
      if (!/^\w+$/.test(name)) {
        this.refs.input.value = ''
        this.refs.input.placeholder = '限英文、數字和底線'
        return
      }

      firebase.auth().signInAnonymously().catch(error => {
        let errorCode = error.code
        let errorMessage = error.message
        alert(`error code ${errorCode} - ${errorMessage}`)
      });

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.setName(name)
          firebase.database().ref('users/' + name).set({
            text: '',
            timestamp: + new Date()
          })
        }
      });
    }
  }

  render() {
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.onSubmit}>
          <input ref="input" type="text" placeholder="您的稱呼" />
          <button>送出</button>
        </form>
      </div>
    )
  }
}
