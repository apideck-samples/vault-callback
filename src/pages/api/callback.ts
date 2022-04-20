import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const vaultUrl = new URL('https://unify.apideck.com/vault/callback')
  const query = stringify(req.query)

  if (query) {
    vaultUrl.search = query
  }

  res.redirect(vaultUrl.toString())
}
