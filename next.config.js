module.exports = {
  async rewrites() {
    return [
      {
        source: '/vault/callback',
        destination: 'https://unify.apideck.com/vault/callback'
      },
      {
        source: '/api/callback',
        destination: 'https://unify.apideck.com/vault/callback'
      }
    ]
  }
}``
