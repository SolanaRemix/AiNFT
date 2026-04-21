import { describe, expect, it } from 'vitest'

import router from '@/router'

const requiredPaths = [
  '/',
  '/explore',
  '/feed',
  '/dashboard',
  '/studio/ai',
  '/studio/collections',
  '/studio/collections/:id/edit',
  '/studio/nfts/:id/edit',
  '/studio/:handle/dao',
  '/studio/:handle/dao/proposals',
  '/studio/:handle/invest',
  '/studio/:handle/growth',
  '/sponsors',
  '/sponsors/campaigns/new',
  '/agents',
  '/admin',
  '/admin/data',
  '/admin/ai',
  '/admin/solana',
  '/admin/marketing',
]

describe('router', () => {
  it('contains all PR0 stub routes', () => {
    const routePaths = router.getRoutes().map((route) => route.path)

    for (const path of requiredPaths) {
      expect(routePaths).toContain(path)
    }
  })
})
