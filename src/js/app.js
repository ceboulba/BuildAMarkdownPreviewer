import marked from 'marked'
;(function() {
  const init = `
  # h1
  ## h2
  ### h3
  * puce
  1. ol  
  texte  

  [link](https://www.archipicture.fr)  

  (https://www.archipicture.fr)`

  const editor = document.getElementById('editor')
  let preview = document.getElementById('preview')
  let editorContent = init
  let previewContent = ''

  editor.innerHTML = editorContent
  //preview.innerHTML = editorContent

  editor.addEventListener('keyup', event => {
    console.log(event.target.value)
    const input = event.target.value
    affiche(input)
  })

  function affiche(input) {
    //previewContent.innerHTML(marked(input))
    // preview.createElement = `<h1>qsd</h1>`
    const el = marked(input).toString()
    preview.innerHTML = el
    console.log(el)
  }
  affiche(init)
})()
