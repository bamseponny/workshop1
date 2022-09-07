/**
 * The main script file of the application.
 *
 * @author Farzad Fahiminia <ff222cb@student.lnu.se>
 * @author Fredrik Eriksson <ferth09@student.lnu.se>
 * @version 1.0.0
 */

const form = document.querySelector('#code-form')
const codeInput = document.querySelector('#code-input')
const divResultOutput = document.querySelector('#result-output')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  divResultOutput.innerHTML = ''

  const codeLines = codeInput.value.split('\n')
  const codeLinesCount = codeLines.length

  divResultOutput.append('Number of code lines: ' + codeLinesCount)
})
