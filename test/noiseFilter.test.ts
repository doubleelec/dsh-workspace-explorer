import { describe, expect, it } from 'vitest'
import { isNoiseDir, visibleEntries } from '../src/client/format'

function entry(name: string, type: 'directory' | 'file') {
  return { name, type }
}

describe('isNoiseDir', () => {
  it('always hides listed dirs regardless of the toggle', () => {
    expect(isNoiseDir('node_modules', false)).toBe(true)
    expect(isNoiseDir('node_modules', true)).toBe(true)
  })

  it('hides dot-dirs only when the toggle is on', () => {
    expect(isNoiseDir('.github', true)).toBe(true)
    expect(isNoiseDir('.github', false)).toBe(false)
  })

  it('never treats plain dirs as noise', () => {
    expect(isNoiseDir('src', true)).toBe(false)
    expect(isNoiseDir('src', false)).toBe(false)
  })
})

describe('visibleEntries (display-layer filter, host untouched)', () => {
  const entries = [
    entry('.github', 'directory'),
    entry('.env', 'file'),
    entry('node_modules', 'directory'),
    entry('src', 'directory'),
    entry('a.txt', 'file'),
  ]

  it('hides dot-dirs when on, keeps dot-files', () => {
    const names = visibleEntries(entries, true).map((e) => e.name)
    expect(names).not.toContain('.github')
    expect(names).not.toContain('node_modules')
    expect(names).toContain('.env')
    expect(names).toContain('src')
    expect(names).toContain('a.txt')
  })

  it('shows dot-dirs when off, keeps listed dirs hidden', () => {
    const names = visibleEntries(entries, false).map((e) => e.name)
    expect(names).toContain('.github')
    expect(names).not.toContain('node_modules')
  })
})
