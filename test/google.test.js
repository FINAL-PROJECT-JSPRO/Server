const request = require('supertest')
const app = require('../app')

const headers = {
  idtoken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1NDFkNmVmMDIyZDc3YTIzMThmN2RkNjU3ZjI3NzkzMjAzYmVkNGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTIwNzIyMDQyMTEzLWp1MzJzOTFkMzJqZjdxa29hdmI5cjViNjM2am5wcGV2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTIwNzIyMDQyMTEzLWp1MzJzOTFkMzJqZjdxa29hdmI5cjViNjM2am5wcGV2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEwMDc1ODY4OTczODM5MDg2NjcxIiwiZW1haWwiOiJrZXBlcmx1YW5sYWlubGFpbjc3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiOUdKSERwQXFIZ2xESDRheU5zWDhmQSIsIm5hbWUiOiJEamFsYWwgS3VybmlhIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tRzZDTWczcEEtTDAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUtGMDVuRDZCS0RQWjdpV0dJWGp5cFVIVHFKazhnclBFUS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiRGphbGFsIiwiZmFtaWx5X25hbWUiOiJLdXJuaWEiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4NDk4NDcxNywiZXhwIjoxNTg0OTg4MzE3LCJqdGkiOiIxNTFmZjkzZmFkOTg4MTVlYWJlMGJjMWQ1YTdlNWE5Yjk1YTYyYmJkIn0.jwzC6mBzOzzGY8j6Ui51HmeQIrHZANBr64YTjr_sJcNpPzwk4brk3QcMN-v8HOJ1sY5L3iCtHb5YgWkaWWd3L1PkEcteWQ5nARVasqufurg0AVcs5LF7iExFrPTCLd-fj-9owIBbj6RLNdzM6SO1j03k-VNN_MX52Ac8feWzIGmvn7XUMcBk6SFuxZBtul5T-YCayaeZPDtjpxjbs-YsPS_MK3cHl7gRIDIQhOZRUsTuEHVRZixo7z7cxGDhwBy1RezRaLi_-cPWnzQP3veTAs4efbYbQ5_5v21W3seeB3bYmWbTtgz8TAyBuz7cpmePzw5pLukWyrAuyPCQdbpOlw',
}

describe('Google SignIn', () => {
  describe('Correct google token', () => {
    test('Return jspro token', (done) => {
      request(app)
        .post('/users/gSignIn')
        .set('idtoken', headers.idtoken)
        .end((err, response) => {
          expect(err).toBe(null)
          expect(response.body).toHaveProperty('token', expect.any(String))
          expect(response.status).toBe(200)
          done()
        })
    })
  })

  describe('Failed to login with google', () => {
    describe('Invalid google token', () => {
      test('Return error named "SyntaxError"', (done) => {
        request(app)
          .post('/users/gSignIn')
          .set('idtoken', 'eaJhbGciOiJSUzI1NiIsImtpZCI6ImE1NDFkNmVmMDIyZDc3YTIzMThmN2RkNjU3ZjI3NzkzMjAzYmVkNGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTIwNzIyMDQyMTEzLWp1MzJzOTFkMzJqZjdxa29hdmI5cjViNjM2am5wcGV2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTIwNzIyMDQyMTEzLWp1MzJzOTFkMzJqZjdxa29hdmI5cjViNjM2am5wcGV2LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1NDg5NTQ1NDU3OTAxMzQ0MzcxIiwiZW1haWwiOiJ4ZW5vbG9pZDI4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiSGxWMGp1dlZCQ3ZLS0VFQ0dQQVBUUSIsIm5hbWUiOiJOaW5vIExvdWlkIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tMkhyd1lIZnZLMTQvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQUtGMDVuQWxTUlFyZS03RU1zcTVSTWRmQXlzNmJwMTgtUS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiTmlubyIsImZhbWlseV9uYW1lIjoiTG91aWQiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU4NDk1MTIxOSwiZXhwIjoxNTg0OTU0ODE5LCJqdGkiOiJjMmVhZmRjOGI4YjIxNGZkYTM1OWQzNjg2MGUyNjhiNmJhMzE3YWY2In0.X1nU2V08u10bJMhkH6n9UPvKP2Xmm4qoUmPZyGf2OyJFduEd_yqICwWXJFGaYeb_xkf0kVlgecmW_Ntq88w8dOasQhuZW1MnIxvpuj3aVGwj1bHdbBRZQ_BpdVv_igO4KpZctzjgHFcYnBOv7uoVr4m0I6JEODd5IlqMAJ6qCkq5c8H7ovWHrcTiXQkSBjMp4-EOlO2jQyEr9mLIoHqdmVnD4FYXDEXUrtwjBq5UKsV7Z2tgFwq24jafx2YL5W_PLu2esaNe-FsEAG0BmnLqMzdnLsJTcBdsb0ZJPEceJfvNXD_zwMAl1ThZzpg_5ITG4EHe0besS50gMUYybCkU_w')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('name', 'SyntaxError')
            expect(response.status).toBe(403)
            done()
          })
      })
    })

    describe('Empty google token', () => {
      test('Return error named "Error"', (done) => {
        request(app)
          .post('/users/gSignIn')
          .end((err, response) => {
            expect(err).toBe(null)
            expect(response.body).toHaveProperty('name', 'Error')
            expect(response.status).toBe(403)
            done()
          })
      })
    })
  })
})