console.log('Hello!')

const form = document.querySelector('#code-form')
const codeInput = document.querySelector('#code-input')
const codeOutput = document.querySelector('#code-output')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  codeOutput.innerHTML = ''

  const codeLines = codeInput.value.split('\n')
  const codeLinesCount = codeLines.length

  // codeOutput.append(codeInput.value)
  codeOutput.append('Number of code lines: ' + codeLinesCount)
  console.log(codeInput.value)
  console.log(codeLinesCount)
})
