;(function markdown() {
  const editorContent = 'aa'
  const editor = document.getElementById('editor')
  const preview = document.getElementById('preview')

  editor.innerHTML = editorContent
  preview.innerHTML = editorContent

  editor.addEventListener('change', event => {
    console.log(event.target.innerHTML)
  })

  function change(content) {
    return (editorContent = content)
  }
})()
