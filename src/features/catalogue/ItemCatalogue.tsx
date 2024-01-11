import { Link } from "react-router-dom"

export interface Props {
  image: string
  title: string
  link: string
}
export default function ItemCatalogue({ image, title, link }: Props) {
  return (
    <div className="uk-card uk-card-default uk-margin-large">
      <div className="uk-card-media-top">
        <img className="uk-padding-large" src={image} alt="logo" width={800} />
      </div>
      <div className="uk-card-body">
        <Link to={link}>
          <h3 className="uk-card-title">{title}</h3>
        </Link>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  )
}
