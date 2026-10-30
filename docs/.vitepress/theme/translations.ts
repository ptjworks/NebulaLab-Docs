import english from './locales/en.json'

const messages: Record<string, string> = english
const fragments = Object.keys(messages).sort((a, b) => b.length - a.length)
const pattern = new RegExp(fragments.map(key => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g')

// Templates use complete messages. Fragment matching handles composed labels,
// such as a destination trail or a sample name inside an accessible label.
export function translate<T>(value: T): T {
  if (typeof value !== 'string') return value
  return (messages[value] ?? value.replace(pattern, key => messages[key])) as T
}
