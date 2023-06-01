interface Props {
  primary?: boolean
  size?: 'small' | 'large'
  label?: string
  backgroundColor?: string
}
export const Button = ({
  primary = false,
  label = 'Click mes',
  size = 'small',
  backgroundColor = 'bg-green-800',
}: Props) => (
  <button
    className={`${backgroundColor} ${
      size === 'small' ? 'text-sm' : 'text-lg'
    } ${primary ? 'text-brandblue' : 'text-red'} border border-red-800`}
  >
    {label}
  </button>
)
