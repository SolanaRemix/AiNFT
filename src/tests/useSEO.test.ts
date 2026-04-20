import { describe, expect, it } from 'vitest'

import { useSEO } from '@/composables/useSEO'

describe('useSEO', () => {
  it('sets title and description metadata', () => {
    useSEO({ title: 'AiNFT Home', description: 'Neo glow web app shell' })

    expect(document.title).toBe('AiNFT Home')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
      'Neo glow web app shell',
    )
  })
})
