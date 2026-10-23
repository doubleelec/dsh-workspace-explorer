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

  it('uses comfortable default spacing; tight charts opt out per-chart via init directive', () => {
    const cfg = buildMermaidInitConfig('dark') as { flowchart: { nodeSpacing: number; rankSpacing: number; padding: number } }
    expect(cfg.flowchart.nodeSpacing).toBe(35)
    expect(cfg.flowchart.rankSpacing).toBe(40)
    expect(cfg.flowchart.padding).toBe(12)
  })

  it('disables useMaxWidth at root and for sequence so timing diagrams keep readable type', () => {
    const cfg = buildMermaidInitConfig('dark') as {
      useMaxWidth: boolean
      sequence: { useMaxWidth: boolean; actorFontSize: number; messageFontSize: number; messageMargin: number }
    }
    expect(cfg.useMaxWidth).toBe(false)
    expect(cfg.sequence.useMaxWidth).toBe(false)
    // 时序图默认偏小:参与者字放大、间距放宽(消息字号保持默认 16)
    expect(cfg.sequence.actorFontSize).toBeGreaterThan(14)
    expect(cfg.sequence.messageFontSize).toBeGreaterThanOrEqual(16)
    expect(cfg.sequence.messageMargin).toBeGreaterThan(35)
  })
})
