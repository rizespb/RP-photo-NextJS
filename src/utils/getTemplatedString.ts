import { ReactElement } from 'react'

export type TTemplatedString = (string | ReactElement)[]

const groupRegex = /(\{\{\w*\}\})/gi

const extractKey = (element: string): string | undefined => element.match(groupRegex)?.[0].replace(/(\{\{)|(\}\})/g, '')

export const getTemplatedString = (
  template: string,
  dictionary: Record<string, string | ReactElement>,
): TTemplatedString => {
  const array = template.split(groupRegex)

  const replacer = (element: string): string | ReactElement => {
    const key = extractKey(element)

    return key ? dictionary[key] : element
  }

  return array.map(replacer)
}
