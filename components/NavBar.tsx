import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navigation = [
  { name: "Destination", href: "#", current: true },
  { name: "Discover", href: "#", current: false },
  { name: "Packages", href: "#", current: false },
  { name: "Explore", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

function classNames(...classNames: string[]) {
  return classNames.filter(Boolean).join("");
}

export const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="min-w-7xl mx-auto border-b border-gray-50 bg-white px-2 sm:px-6 lg:px-8 ">
            <div className="relative mx-0 flex h-16 items-center justify-between md:mx-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile Menu Button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open Menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="cursor-pointer text-xl font-semibold">
                    Travel<span className="text-violet-500">in</span>
                  </h1>
                  <div className="hidden sm:ml-6 sm:block md:ml-60">
                    <div className="flex space-x-4">
                      {Navigation.map((item) => (
                        <a
                          href={item.href}
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-violet-500 text-white shadow-lg rounded-md px-3 py-2 text-sm font-medium"
                              : "text-gray-300 hover:bg-violet-500 hover:text-white hover:shadow-lg rounded-md px-3 py-2 text-sm font-medium transition-colors"
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <button className="rounded-md border border-violet-100 px-3 py-2 text-sm font-medium text-violet-400 hover:bg-violet-500 hover:text-white hover:shadow-md">
                  Register
                </button>
              </div>
            </div>
          </div>
          {/* Mobile view*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {Navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  href={item.href}
                  as="a"
                  className={classNames(
                    item.current
                      ? "bg-violet-500 text-white shadow-lg block rounded-md px-3 py-2 text-base font-medium"
                      : "text-gray-300 hover:bg-violet-500 hover:text-white hover:shadow-lg block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
