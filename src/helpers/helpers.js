export const generateRandomString = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength))
  }
  return result
}

export const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000)
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}

export const getGreeting = () => {
  const today = new Date(Date.now())
  const hours = today.getHours()
  switch (true) {
    case (hours < 6):
      return "¡Buenas noches!"
    case (hours < 13):
      return "¡Buenos días!"
    case (hours < 21):
      return "¡Buenas tardes!"
    default:
      return "¡Buenas noches!"
  }
}