// import React from 'react'
import { sendMessageText, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return{
    dialogsPage: state.dialogsReducer
  }
}


const DialogsContainer = connect(mapStateToProps, {sendMessageText, updateNewMessageText})(Dialogs);

export default DialogsContainer