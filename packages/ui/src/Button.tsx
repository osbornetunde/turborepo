interface Props {
  primary?: boolean
  size?: 'small' | 'large'
  label?: string
}
export const Button = ({
  primary = false,
  label = 'Click mes',
  size = 'small',
}: Props) => (
  <button
    className={`bg-green-800 ${size === 'small' ? 'text-sm' : 'text-lg'} ${
      primary ? 'text-brandblue' : 'text-red'
    } border border-red-800`}
  >
    {label}
  </button>
)
