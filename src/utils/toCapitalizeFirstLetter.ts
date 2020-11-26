function toCapitalizeFirstLetter(string: string | undefined) {
  if (!string) {
    return string
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default toCapitalizeFirstLetter
