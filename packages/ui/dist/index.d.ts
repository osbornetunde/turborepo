import * as react_jsx_runtime from 'react/jsx-runtime'

interface Props {
  primary?: boolean
  size?: 'small' | 'large'
  label?: string
  backgroundColor?: string
}
declare const Button: ({
  primary,
  label,
  size,
  backgroundColor,
}: Props) => react_jsx_runtime.JSX.Element

declare const Text: ({
  value,
}: {
  value: string
}) => react_jsx_runtime.JSX.Element

export { Button, Text }
