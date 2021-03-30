const describe = require('mocha').describe
const it = require('mocha').it
const strictEqual = require('../calculation')
const expect = require('chai').expect


describe('calculation', () => {
  describe('strictEqual', () => {
    it('returns when two parameters are not strictly equal', () => {
      const num1 = 5
      const num2 = '5'
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })
    it('returns when two parameters are not strictly equal', () => {
      const num1 = '23'
      const num2 = '21'
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })
    it('return when two parameters are strictly equal', () => {
      const num1 = 26
      const num2 = 26
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(true)
    })
    it('returns when two parameters are not strictly equal', () => {
      const num1 = 21
      const num2 = 28
      const answer = strictEqual(num1, num2)

      expect(answer).to.equal(false)
    })
  })
})
