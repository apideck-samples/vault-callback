import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const query = stringify(req.query)
  res.redirect(`https://unify.apideck.com/vault/callback?${query}`)
}
