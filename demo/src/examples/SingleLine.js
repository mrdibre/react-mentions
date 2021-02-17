import React from 'react'

import { Mention, MentionsInput } from '../../../src'

import { provideExampleValue } from './higher-order'
import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

function SingleLine({ value, data, onChange, onAdd }) {
  return (
    <div className="single-line">
      <h3>Single line input</h3>

      <MentionsInput
        singleLine
        value={value}
        onChange={onChange}
        style={defaultStyle}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        allowSuggestionsAboveCursor
        renderDropdown={({ children, ...props }) => {
          console.log(props);
          return (
            <div style={{ background: "#000" }}>
              {children}
            </div>
          );
        }}
      >
        <Mention
          data={data}
          onAdd={onAdd}
          style={defaultMentionStyle}
          renderSuggestion={(_, __, highlightedDisplay) => <span style={{ color: "blue", fontSize: 18 }}>{highlightedDisplay}</span>}
        />
      </MentionsInput>
    </div>
  )
}

const asExample = provideExampleValue('')

export default asExample(SingleLine)
