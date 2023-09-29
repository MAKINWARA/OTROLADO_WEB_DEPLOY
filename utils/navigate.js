export const NAVIGATION_EVENT = 'pushState'

export function navigate(href) {
  window.history.pushState({}, '', href)
  const navEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navEvent)
}
