import { Link, Outlet, useLocation } from "react-router-dom"
import { Page } from "../../main"
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import pilates2_logo from "../pilates/assets/pilates_2.png"

export interface Props {
  navPages: Page[]
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ")
// }

export default function Navbar({ navPages }: Props) {
  const currentLocation = useLocation()
  console.log(currentLocation)

  const currentClassNames = "bg-gray-900 text-white"
  const defaultClassNames = "text-gray-300 hover:bg-gray-700 hover:text-white"

  const headerTitle = navPages.find((navPage: Page) => {
    return navPage.location == currentLocation.pathname
  })

  const addNavLinks = (format: string) => {
    return navPages.map(({ location, displayValue }) => {
      return (
        <Link
          key={location}
          to={location}
          className={`${
            location == currentLocation.pathname
              ? currentClassNames
              : defaultClassNames
          } ${format}`}
        >
          {displayValue}
        </Link>
      )
    })
  }
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={pilates2_logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {addNavLinks("rounded-md px-3 py-2 text-sm font-medium")}
                      {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {addNavLinks(
                  "block rounded-md px-3 py-2 text-base font-medium",
                )}
                {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <header>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {headerTitle?.displayValue}
          </h1>
        </div>
      </header>
      <Outlet />
    </div>
  )

  // return (
  //   <div>
  //     <nav className="bg-gray-800">
  //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //         <div className="relative flex h-16 items-center justify-between">
  //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

  //             {/* <!-- Mobile menu button--> */}
  //             <button
  //               type="button"
  //               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  //               aria-controls="mobile-menu"
  //               aria-expanded="false"
  //             >
  //               <span className="absolute -inset-0.5"></span>
  //               <span className="sr-only">Open main menu</span>
  //               {/* <!--
  //           Icon when menu is closed.

  //           Menu open: "hidden", Menu closed: "block"
  //         --> */}
  //               <svg
  //                 className="block h-6 w-6"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 strokeWidth="1.5"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  //                 />
  //               </svg>
  //               {/* <!--
  //           Icon when menu is open.

  //           Menu open: "block", Menu closed: "hidden"
  //         --> */}
  //               <svg
  //                 className="hidden h-6 w-6"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 strokeWidth="1.5"
  //                 stroke="currentColor"
  //                 aria-hidden="true"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   d="M6 18L18 6M6 6l12 12"
  //                 />
  //               </svg>
  //             </button>
  //           </div>
  //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
  //             <div className="flex flex-shrink-0 items-center">
  //               {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
  //             </div>
  //             <div className="hidden sm:ml-6 sm:block">
  //               <div className="flex space-x-4">
  //                 {/* desktop view */}
  //                 {addNavLinks("rounded-md px-3 py-2 text-sm font-medium")}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  //       <div className="sm:hidden" id="mobile-menu">
  //         <div className="space-y-1 px-2 pb-3 pt-2">
  //           {addNavLinks("block rounded-md px-3 py-2 text-base font-medium")}
  //         </div>
  //       </div>
  //     </nav>

  //     <header>
  //       <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  //         <h1 className="text-3xl font-bold tracking-tight text-gray-900">
  //           {headerTitle?.displayValue}
  //         </h1>
  //       </div>
  //     </header>
  //     {/* <nav className="uk-navbar-container">
  //       <div className="uk-container">
  //         <div className="uk-navbar-left">
  //           <Link to={"/"} className="uk-navbar-item uk-logo">
  //             {" "}
  //             <h2 className="uk-heading-small">Xander Creative</h2>
  //           </Link>

  //           <div className="uk-navbar-right uk-margin-right">
  //             <ul className="uk-navbar-nav">
  //               <li>
  //                 <Link to={"aboutme"}>About</Link>
  //               </li>
  //               <li>
  //                 <Link to={"contact"}>Contact</Link>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </nav> */}
  //     <Outlet />
  //   </div>
  // )
}
