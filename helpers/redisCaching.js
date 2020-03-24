const Redis = require('ioredis')
const redis = new Redis()

module.exports = {
  
  setCache(type, data) {
    redis.hset('services', type, JSON.stringify(data))
  },

  getCache(type, data) {
    return redis.hget('services', type)
  }
}