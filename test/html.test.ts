import { describe, expect, it } from 'vitest'
import { isHtmlFile } from '../src/client/html'

describe('isHtmlFile', () => {
  it('matches html variants case-insensitively', () => {
    expect(isHtmlFile('index.html')).toBe(true)
    expect(isHtmlFile('page.HTM')).toBe(true)
    expect(isHtmlFile('doc.Xhtml')).toBe(true)
  })

  it('rejects non-html', () => {
    expect(isHtmlFile('index.ts')).toBe(false)
    expect(isHtmlFile('readme.md')).toBe(false)
    expect(isHtmlFile('Makefile')).toBe(false)
    expect(isHtmlFile('.html')).toBe(false)
  })
})
