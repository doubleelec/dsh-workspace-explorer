import { describe, expect, it } from 'vitest'
import { autoPopupHeight, clampPopupHeight, loadManualHeight, saveManualHeight } from '../src/client/popupLayout'

describe('autoPopupHeight', () => {
  it('uses the measured space when it fits', () => {
    expect(autoPopupHeight(100, 700, 800)).toBe(600)
  })

  it('floors at 320 when space is tight (short popup root cause)', () => {
    expect(autoPopupHeight(100, 200, 800)).toBe(320)
  })

  it('caps at viewport minus top margin', () => {
    expect(autoPopupHeight(100, 5000, 800)).toBe(684)
  })

  it('never goes below min even when the viewport is tiny', () => {
    expect(autoPopupHeight(700, 750, 800)).toBe(320)
  })
})

describe('clampPopupHeight', () => {
  it('rounds and clamps the manual height into range', () => {
    expect(clampPopupHeight(500.6, 100, 800)).toBe(501)
    expect(clampPopupHeight(10, 100, 800)).toBe(320)
    expect(clampPopupHeight(5000, 100, 800)).toBe(684)
  })
})

describe('manual height storage', () => {
  it('is a safe no-op without window (node env)', () => {
    expect(loadManualHeight()).toBe(null)
    expect(() => saveManualHeight(500)).not.toThrow()
    expect(() => saveManualHeight(null)).not.toThrow()
  })
})
