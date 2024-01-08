export interface Props {
  image: string
}
export default function Item({ image }: Props) {
  return (
    <div className="uk-card uk-card-default uk-margin-large">
      <div className="uk-card-media-top">
        <img className="uk-padding-large" src={image} alt="logo" width={800} />
      </div>
      <div className="uk-card-body">
        <h3 className="uk-card-title">Leggy Frog</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  )
}
