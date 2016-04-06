'use strict';

import {
  Entity,
} from 'draft-js';


       export function addMentionBlock(editorState) {

         console.log("insertMentionBlock");

            const entityKey = Entity.create(
              'TOKEN',
              'IMMUTABLE',
              {content: 'This is a test Mention content'}
            );


            return editorState;
        }
