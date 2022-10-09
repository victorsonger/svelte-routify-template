var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const fs = require('fs');

module.exports = async (req, res) => {
  const mdStr = fs.readFileSync('/blog-node-env.txt')
  console.log('mdStr', mdStr);
  var data = {
      msg: md.render(mdStr)
  }
  res.status(200).json(data);
}