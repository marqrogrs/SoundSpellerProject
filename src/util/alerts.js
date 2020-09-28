import swal from 'sweetalert'

export const triggerErrorAlert = (error) => {
  return swal('Oops!', error, 'error')
}

export const prettyPrintErrorCode = (errorCode) => {
  var newString = ""
  for (let i = 0; i < errorCode.length; i++) {
    if (errorCode[i] === errorCode[i].toUpperCase() && i > 0) {
      newString += ' '
    }
    newString += errorCode[i]
  }
  return newString
}
