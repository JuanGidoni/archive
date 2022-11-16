const formatedDate = () => {

 var date = new Date()

 function getFormattedDate(today) {

  var dd = today.getDate()
  var mm = today.getMonth() + 1
  var yyyy = today.getFullYear()
  var hour = today.getHours()
  var minu = today.getMinutes()
  var secs = today.getSeconds()

  if (dd < 10) {
   dd = '0' + dd
  }
  if (mm < 10) {
   mm = '0' + mm
  }
  if (minu < 10) {
   minu = '0' + minu
  }
  if (secs < 10) {
   secs = '0' + secs
  }

  return dd + '/' + mm + '/' + yyyy + ' ' + hour + ':' + minu + ':' + secs
 }

 return getFormattedDate(date)
}

export default formatedDate
