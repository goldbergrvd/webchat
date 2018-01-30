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

  componentDidMount() {
    firebase.database().ref('users')
      .on('child_changed', data => {
        this.props.actions.addMessage({
          author: data.key,
          ...data.val()
        })
      })
  }

  render() {
    let { messages, name, actions } = this.props;
    return (
      <div className="content">
        <MessageList messages={messages} />
        <MessageForm name={name} addMessage={actions.addMessage} focus={name ? true : false} />
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
