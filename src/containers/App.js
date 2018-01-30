import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from '../firebase'
import './App.css'
import { MessageList, MessageForm, LoginForm } from '../components'
import * as actions from '../actions'

class App extends Component {

  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    name: PropTypes.string,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
  }

  addMessage(data) {
    this.props.actions.addMessage({
      author: data.key,
      ...data.val()
    })
  }

  componentDidMount() {
    let usersRef = firebase.database().ref('users')
    usersRef.on('child_added', this.addMessage.bind(this))
    usersRef.on('child_changed', this.addMessage.bind(this))
  }

  render() {
    let { messages, name, actions } = this.props;
    return (
      <div className="content">
        <MessageList messages={messages} />
        <MessageForm name={name} />
        {!name && <LoginForm setName={actions.setName} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  name: state.name
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
