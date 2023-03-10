import { WORDS } from './words'

function getWords() {
  return WORDS
}

export function getWordFiveMinutes() {
  const words = getWords()
  return words[0].toUpperCase()
}

export async function isValidWord(word: string) {
  try {
    const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
    const response = await fetch(URL)
    if (response.status !== 200) throw new Error('Request Failed')
    const json = await response.json()

    return json.length
  } catch (e) {
    console.log(e)
    return false
  }

  /* const words = getWords();
  return words.includes(word.toLowerCase()); */
}
