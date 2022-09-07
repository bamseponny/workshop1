console.log('Hello!')

const form = document.querySelector('#code-form')
const codeInput = document.querySelector('#code-input')
const codeOutput = document.querySelector('#code-output')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  codeOutput.innerHTML = ''

  codeOutput.append(codeInput.value)
  console.log(typeof codeInput.value)
})
