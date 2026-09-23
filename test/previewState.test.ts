import { describe, expect, it } from 'vitest'
import { __resetPreviewStateForTest, getSavedHtmlView, getSavedMdView, getSavedPreview, getSavedTab, saveHtmlView, saveMdView, savePreviewRef, savePreviewTab, shouldRestorePreview } from '../src/client/previewState'

describe('previewState defaults', () => {
  it('starts on files tab with no saved preview', () => {
    __resetPreviewStateForTest()
    expect(getSavedTab()).toBe('files')
    expect(getSavedPreview()).toBe(null)
    expect(getSavedMdView()).toBe('rendered')
    expect(getSavedHtmlView()).toBe('rendered')
  })
})

describe('save/restore', () => {
  it('remembers tab + preview ref + md/html view', () => {
    __resetPreviewStateForTest()
    savePreviewTab('preview')
    savePreviewRef('/ws', 'docs/a.md', 'a.md', 100)
    saveMdView('source')
    saveHtmlView('source')
    expect(getSavedTab()).toBe('preview')
    expect(getSavedPreview()).toEqual({ root: '/ws', rel: 'docs/a.md', name: 'a.md', size: 100 })
    expect(getSavedMdView()).toBe('source')
    expect(getSavedHtmlView()).toBe('source')
    __resetPreviewStateForTest()
  })

  it('only restores when the workspace root matches', () => {
    __resetPreviewStateForTest()
    savePreviewRef('/ws', 'docs/a.md', 'a.md', 100)
    const saved = getSavedPreview()
    expect(shouldRestorePreview(saved, '/ws')).toBe(true)
    expect(shouldRestorePreview(saved, '/other')).toBe(false)
    expect(shouldRestorePreview(null, '/ws')).toBe(false)
    expect(shouldRestorePreview(saved, null)).toBe(false)
    __resetPreviewStateForTest()
  })
})
