function riskRatingCalculator(jsonClaim) {
  try {
    const incidentWords = ['collide', 'crash', 'scratch', 'bump', 'smash']
    const { claim_history } = JSON.parse(jsonClaim)

    //words that end with e
    const validatedIncidentWords = incidentWords.map((word) => {
      if (word.endsWith('e')) return word.slice(0, -1)
      return word
    })

    const rating = claim_history.split(' ').reduce((riskScore, currentWord) => {
      //check if incident word is present in current word
      if (
        validatedIncidentWords.includes(currentWord) ||
        validatedIncidentWords.some((prefix) => currentWord.startsWith(prefix))
      )
        riskScore++
      return riskScore
    }, 0)

    return JSON.stringify({ risk_rating: rating })
  } catch (err) {
    // returns a error json object
    return JSON.stringify({ error: 'there is an error' })
  }
}

module.exports = riskRatingCalculator
