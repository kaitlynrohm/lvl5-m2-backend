const riskRatingCalculator = require('../api/riskRating')
describe('API 2 Tests', () => {
  test('test should return an error json object', () => {
    expect(riskRatingCalculator(1)).toEqual({ error: 'there is an error' })
  })
  describe.each([
    [
      "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.",
      3,
      'default test case',
    ],
    ['crash crash', 2, 'duplicate incident words'],
    [
      'smashed smashes smashing crashed crashes crashing bumped bumps bumping collided collides scratched scratches scratching ',
      14,
      'most modifications for incident words',
    ],
    ['colliding', 1, 'ing modification for words that end with e'],
    ['perfect history', 0, 'a perfect customer'],
  ])(
    'validate risk_rating counter and return a Json object from input Json object',
    (claimHistory, riskRating, testcase) => {
      test(`Test should check ${testcase} `, () => {
        expect(riskRatingCalculator({ claim_history: claimHistory })).toEqual({
          risk_rating: riskRating,
        })
      })
    }
  )
})
