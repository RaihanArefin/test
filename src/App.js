import React from 'react';
import './App.css';

const marked = require('marked');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
      markdown: "# h1\n## h2\n[la](https://www.google.com/)\n`<div></div>`\n```functionw\ndgsdgsd\nvsdv\n```\n- list\n>block codes\n![](https://commonmark.org/help/images/favicon.png)\n **bold**"

    }


    this.update = this.update.bind(this);
  }


  update = function (event) {
    this.setState({
      markdown: event.target.value
    });
  }
  render() {
    const { markdown } = this.state;
    return (
      <div className="row App container-fluid">
        {/* ------------Input---------------  */}
        <div className="col-md-6">
          <h1>Input</h1>
          <textarea id="editor" className="la" value={markdown} onChange={(event) => this.update(event)}></textarea>
        </div>

        {/* ----------------OUTPUT---------------- */}
        <div className="col-md-6">
          <h1>Output</h1>
          <div id="preview" className="la" dangerouslySetInnerHTML={{ __html: marked(markdown) }}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
