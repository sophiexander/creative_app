export interface Props {
  image: string
}
export default function Icon({ image }: Props) {
  return (
    <div>
      <img
        src={image}
        className="icon uk-card uk-card-default uk-card-body uk-animation-scale-up"
        alt="logo"
        width={200}
      />
    </div>
  )
}
