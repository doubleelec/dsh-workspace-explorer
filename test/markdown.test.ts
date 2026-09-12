import { describe, expect, it } from 'vitest'
import { isMarkdownFile, parseInline, parseMarkdown } from '../src/client/markdown'

describe('isMarkdownFile', () => {
  it('matches md variants case-insensitively', () => {
    expect(isMarkdownFile('README.md')).toBe(true)
    expect(isMarkdownFile('doc.MDX')).toBe(true)
    expect(isMarkdownFile('a.markdown')).toBe(true)
    expect(isMarkdownFile('a.mkd')).toBe(true)
  })

  it('rejects non-markdown', () => {
    expect(isMarkdownFile('index.ts')).toBe(false)
    expect(isMarkdownFile('Makefile')).toBe(false)
    expect(isMarkdownFile('.md')).toBe(false)
  })
})

describe('parseInline', () => {
  it('parses plain text', () => {
    expect(parseInline('hello')).toEqual([{ t: 'text', text: 'hello' }])
  })

  it('parses bold / italic / strike / code', () => {
    expect(parseInline('**b**')).toEqual([{ t: 'b', children: [{ t: 'text', text: 'b' }] }])
    expect(parseInline('*i*')).toEqual([{ t: 'i', children: [{ t: 'text', text: 'i' }] }])
    expect(parseInline('~~s~~')).toEqual([{ t: 's', children: [{ t: 'text', text: 's' }] }])
    expect(parseInline('`c`')).toEqual([{ t: 'code', text: 'c' }])
  })

  it('renders links as plain text with url', () => {
    expect(parseInline('[t](https://x.y/z)')).toEqual([{ t: 'link', text: 't (https://x.y/z)' }])
  })

  it('keeps unbalanced markers as text', () => {
    expect(parseInline('a ** b')).toEqual([{ t: 'text', text: 'a ** b' }])
  })
})

describe('parseMarkdown', () => {
  it('parses headings and paragraphs', () => {
    const nodes = parseMarkdown('# Title\n\nbody **b**')
    expect(nodes[0]).toMatchObject({ t: 'h', level: 1 })
    expect(nodes[1]).toMatchObject({ t: 'p' })
  })

  it('parses fenced code blocks with lang', () => {
    const nodes = parseMarkdown('```ts\nconst a = 1\n```')
    expect(nodes).toEqual([{ t: 'code', lang: 'ts', text: 'const a = 1' }])
  })

  it('parses quotes / lists / tasks / hr / tables', () => {
    expect(parseMarkdown('> q')[0].t).toBe('quote')
    expect(parseMarkdown('- a\n- b')[0].t).toBe('ul')
    expect(parseMarkdown('1. a\n2. b')[0]).toMatchObject({ t: 'ol', start: 1 })
    const task = parseMarkdown('- [x] done\n- [ ] todo')[0]
    expect(task).toMatchObject({ t: 'task', checked: [true, false] })
    expect(parseMarkdown('---')[0].t).toBe('hr')
    const table = parseMarkdown('| a | b |\n|---|---|\n| 1 | 2 |')[0]
    expect(table).toMatchObject({ t: 'table' })
  })

  it('never emits raw html nodes', () => {
    const nodes = parseMarkdown('<script>alert(1)</script>\n\n<img src=x onerror=y>')
    expect(JSON.stringify(nodes)).not.toContain('<script>')
    expect(nodes[0]).toMatchObject({ t: 'p' })
  })
})
