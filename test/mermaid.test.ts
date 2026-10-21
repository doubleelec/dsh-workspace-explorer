import { describe, expect, it } from 'vitest'
import { buildMermaidInitConfig, isMermaidLang, MERMAID_CDN_URLS, __resetMermaidCacheForTest } from '../src/client/mermaid'

describe('isMermaidLang', () => {
  it('matches mermaid case-insensitively', () => {
    expect(isMermaidLang('mermaid')).toBe(true)
    expect(isMermaidLang('Mermaid')).toBe(true)
    expect(isMermaidLang('  MERMAID  ')).toBe(true)
  })

  it('rejects other langs', () => {
    expect(isMermaidLang('ts')).toBe(false)
    expect(isMermaidLang('')).toBe(false)
    expect(isMermaidLang('mermaid2')).toBe(false)
  })
})

describe('mermaid CDN config', () => {
  it('has a fallback mirror', () => {
    expect(MERMAID_CDN_URLS.length).toBeGreaterThanOrEqual(2)
    expect(MERMAID_CDN_URLS[0]).toContain('mermaid')
    __resetMermaidCacheForTest()
  })
})

describe('buildMermaidInitConfig', () => {
  it('enables htmlLabels with panel font so measure matches display', () => {
    const cfg = buildMermaidInitConfig('dark') as { flowchart: { htmlLabels: boolean; useMaxWidth: boolean }; fontFamily: string }
    expect(cfg.flowchart.htmlLabels).toBe(true)
    expect(cfg.flowchart.useMaxWidth).toBe(false)
    expect(cfg.fontFamily).toContain('PingFang SC')
  })
})
