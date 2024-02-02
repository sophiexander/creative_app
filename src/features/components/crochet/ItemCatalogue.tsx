import { Link } from "react-router-dom"
import sunset from "../../pilates/assets/sunset.jpg"

export interface Props {
  image: string
  title: string
  link: string
}

export const products = [
  {
    id: 1,
    name: "Leggy Frog",
    href: "leggy-frog",
    imageSrc: sunset,
    imageAlt: "Leggy Frog",
    price: "$25",
  },
  {
    id: 2,
    name: "Pudding cat",
    href: "pudding-cat",
    imageSrc: sunset,
    imageAlt: "Pudding cat",
    price: "$35",
  },
  // More products...
]
export default function ItemCatalogue({ image, title, link }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="uk-card uk-card-default">
    //   <div className="uk-card-media-top">
    //     <img className="uk-padding-large" src={image} alt="logo" width={800} />
    //   </div>
    //   <div className="uk-card-body">
    //     <Link to={link}>
    //       <h3 className="uk-card-title">{title}</h3>
    //     </Link>

    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt.
    //     </p>
    //   </div>
    // </div>
  )
}
