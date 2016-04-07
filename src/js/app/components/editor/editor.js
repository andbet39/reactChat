import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-mention-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import 'draft-js-mention-plugin/lib/plugin.css';
//import editorStyles from './editorStyles.css';
import mentions from './mentions';

const mentionPlugin = createMentionPlugin({ mentions });
const hashtagPlugin = createHashtagPlugin();

const plugins = [hashtagPlugin,mentionPlugin];

export default class SimpleMentionEditor extends Component {

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
                   plugins={ [hashtagPlugin,mentionPlugin] }
                   onChange={this.onChange}
                   ref="editor"
                 />
          </div>
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
