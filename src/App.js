import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialText = `# A Markdown Previewer Designed by Sovit

## This is a sub-heading
This is a link to my Github Profile (https://github.com/sovit-123)
### And here's some other cool stuff:
  
This is inline code, \`console.log('FreeCodeCamp is awesome')\`.

\`\`\`
// This is a code block

function code() {
  console.log('Hello everyone.');
  }
}
\`\`\`

1. The list starts from here
2. Goes on for a while 
3. And ends here

> Block Quotes

![This is an image](https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0e1624bfa6a8a9937276964b2747ef7&auto=format&fit=crop&w=1050&q=80)
  
**This Bold Text Looks Good.**
`;

    this.state = {
      defaultText: this.initialText,
      markdown: "",
      previewText: ""
    };

    this.changeMarkdown = this.changeMarkdown.bind(this);
  }

  changeMarkdown() {
    let newText = document.getElementById("editor").value;
    this.setState({
      defaultText: newText
    });

    let markdown = marked(newText);
    
    this.setState({
      previewText: markdown,
      initialText: markdown
    });
  }

  componentDidMount() {
    this.changeMarkdown();
  }

  render() {
    return (
      <div className="App container">
        <h1>Markdown Previewer</h1>
        <div className="editor-area">
          <h4>Enter Markdown</h4>
          <textarea
            id="editor"
            placeholder="Enter markdown..."
            value={this.state.defaultText}
            onChange={this.changeMarkdown}
          />
        </div>

        <h4>Preview</h4>
        <div id="preview-area">
          <div
            id="preview"
            className="markdown-preview"
            dangerouslySetInnerHTML={{ __html: this.state.previewText }}
          />
        </div>
        <footer>Coded and designed by&nbsp; 
          <span style={{color: 'cyan'}}>Sovit Ranjan Rath</span>
          </footer>
      </div>
    );
  }
}

export default App;
