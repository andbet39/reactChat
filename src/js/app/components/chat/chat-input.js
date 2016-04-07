import React from 'react';
import {Editor, EditorState,convertToRaw} from 'draft-js';
import backdraft from 'backdraft-js'



class ChatInput extends React.Component {

  constructor(props) {
      super(props);

      this.state = {editorState: EditorState.createEmpty()};
      this.focus = () => this.refs.editor.focus();
      this.onChange = (editorState) => this.setState({editorState});
    }

  onSubmit(){
      let content  = this.state.editorState.getCurrentContent();
      let markedUpBlocks = backdraft(convertToRaw(content))
      this.props.onPostMessage(markedUpBlocks);

      this.setState({editorState: EditorState.createEmpty()})
  }

  render() {

    const {editorState} = this.state;

    return (
     <div className="row">
       <div className="col-md-12">
        <div style={styles.editor} onClick={this.focus}>
               <Editor
                 editorState={this.state.editorState}
                 onChange={this.onChange}
                 ref="editor"
               />
        </div>

        <button type="submit" onClick={() => this.onSubmit()} className="btn btn-success">Invia</button>
       </div>
     </div>
    )
  }

}

const styles = {

      editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 20,
        padding: 10,
      }
    };

export default ChatInput;
