import { connect } from 'react-redux'
import ElekenTestBackEnd from '../components/ElekenTestBackEnd'
import {asyncRequest, onSendMessage} from "../actions"

const mapStateToProps = (state, ownProps) => ({
  messages: state.chat
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  //onSendMessage: (action) => dispatch(action),
  onGetAllMessage: ()=>{
      dispatch(asyncRequest())
  },
  onSendMessage: (name, message)=>{
    dispatch(onSendMessage(name, message));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElekenTestBackEnd)