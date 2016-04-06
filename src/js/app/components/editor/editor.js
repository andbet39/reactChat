import React from 'react'
import {Entity,CompositeDecorator,Editor, EditorState,convertToRaw} from 'draft-js';
import backdraft from 'backdraft-js'
import ChatMention from './mention'
import {addMentionBlock} from './modifier/addMentionBlock'


export default class EditorTest extends React.Component {

    constructor(props) {
      super(props);

      const compositeDecorator = new CompositeDecorator([
                  {
                    strategy: handleStrategy,
                    component: ChatMention,
                  }
                ]);


      this.state = {editorState: EditorState.createEmpty(compositeDecorator)};
      this.onChange = (editorState) => this.setState({editorState});
      this.focus = () => this.refs.editor.focus();

    }

    addMention(){
        console.log ('addMention');
        
        this.setState({
          editorState: addMentionBlock(this.state.editorState),
      });
    }
    handleClick(){
      let content =this.state.editorState.getCurrentContent();
      let markedUpBlocks = backdraft(convertToRaw(content))
      console.log(markedUpBlocks.join(" "));
    }

    logState(){
      console.log(this.state.editorState.toJS())
    }

    render() {
      const {editorState} = this.state;
      return(
        <div className="row">
          <button onClick={()=>this.addMention()} className="btn btn-danger">AddMention</button>

            <div style={styles.root}>
              <div style={styles.editor} onClick={this.focus}>
                <Editor   blockRendererFn={mentionBlockRenderer} editorState={editorState} onChange={this.onChange} ref="editor"/>
              </div>
              <button onClick={()=>this.handleClick()} className="btn btn-success">Submit</button>
              <button onClick={()=>this.logState()} className="btn btn-danger">Log State</button>
              <h3>Mention Example</h3>
              <ChatMention></ChatMention>
          </div>
        </div>
     )
    }
} //end of react Component

const styles = {
        root: {
          fontFamily: '\'Helvetica\', sans-serif',
          padding: 20,
          width: 600,
        },
        editor: {
          border: '1px solid #ddd',
          cursor: 'text',
          fontSize: 16,
          minHeight: 40,
          padding: 10,
        },
        button: {
          marginTop: 10,
          textAlign: 'center',
        },
        handle: {
          color: 'rgba(98, 177, 254, 1.0)',
          direction: 'ltr',
          unicodeBidi: 'bidi-override',
        },
        hashtag: {
          color: 'rgba(95, 184, 138, 1.0)',
        },
      };

      const HANDLE_REGEX = /\@[\w]+/g;

      function mentionBlockRenderer(block){
        console.log(block.getType());
        if (block.getType() === 'media') {
                return {
                  component: ChatMention,
                  editable: false,
                };
              }
        return null;
      }

      function handleStrategy(contentBlock, callback) {
        findWithRegex(HANDLE_REGEX, contentBlock, callback);
      }


      function findWithRegex(regex, contentBlock, callback) {
        const text = contentBlock.getText();
        let matchArr, start;
        while ((matchArr = regex.exec(text)) !== null) {
          start = matchArr.index;
          callback(start, start + matchArr[0].length);
        }
      }
