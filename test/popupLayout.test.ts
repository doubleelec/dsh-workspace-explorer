import { describe, expect, it } from 'vitest'
import { autoPopupHeight, clampPopupHeight, clampPopupWidth, loadManualHeight, loadManualWidth, saveManualHeight, saveManualWidth } from '../src/client/popupLayout'

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

describe('clampPopupWidth', () => {
  it('rounds and clamps the manual width into range', () => {
    expect(clampPopupWidth(400.6, 1280)).toBe(401)
    expect(clampPopupWidth(100, 1280)).toBe(280)
    expect(clampPopupWidth(5000, 1280)).toBe(1248)
  })

  it('never goes below min even when the viewport is tiny', () => {
    expect(clampPopupWidth(200, 300)).toBe(280)
  })
})

describe('manual width storage', () => {
  it('is a safe no-op without window (node env)', () => {
    expect(loadManualWidth()).toBe(null)
    expect(() => saveManualWidth(400)).not.toThrow()
    expect(() => saveManualWidth(null)).not.toThrow()
  })
})
