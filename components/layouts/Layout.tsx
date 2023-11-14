import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { FiAlignLeft, FiAlignJustify } from "react-icons/fi";
import { BsChevronRight, BsDot } from "react-icons/bs";
import { GoDot } from "react-icons/go";

interface getProps {
  children: any;
}

const Layout = (props: getProps) => {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(0);

  const menus = [
    {
      menuId: 1,
      title: "Form",
      href: "/dashboard",
      subMenus: [],
    },
    {
      menuId: 2,
      title: "Component",
      href: "",
      subMenus: [
        {
          subMeniId: 1,
          title: "Button",
          href: "/button",
        },
        {
          subMeniId: 2,
          title: "Card",
          href: "/card",
        },
      ],
    },
    {
      menuId: 3,
      title: "Form",
      href: "",
      subMenus: [
        {
          subMeniId: 1,
          title: "Element",
          href: "/card",
        },
        {
          subMeniId: 2,
          title: "Datepicker",
          href: "/card",
        },
        {
          subMeniId: 3,
          title: "Autocomplete",
          href: "/card",
        },
      ],
    },
  ];

  return (
    <div>
      <div
        className={`${
          toggle ? "w-64" : "w-16"
        }  h-screen bg-white fixed top-0 left-0 duration-500`}
      >
        <div className="w-full h-16 "></div>
        <div className="px-2 pt-2">
          <ul>
            {menus.length > 0 ? (
              menus.map((menu, index) => {
                if (menu.subMenus.length > 0) {
                  return (
                    <li className="cursor-pointer mb-2" key={menu.menuId}>
                      <div
                        className=" w-full flex items-center py-2 rounded-lg  font-medium px-2 relative duration-100 text-gray-500 hover:bg-primary hover:text-white"
                        onClick={() =>
                          menu.menuId == active
                            ? setActive(0)
                            : setActive(menu.menuId)
                        }
                      >
                        <FiAlignJustify className="mr-3" />
                        {toggle && (
                          <>
                            <span>{menu.title}</span>
                            <BsChevronRight
                              className={`absolute right-1 duration-300 ${
                                active == menu.menuId ? "rotate-90" : ""
                              }`}
                            />
                          </>
                        )}
                      </div>
                      {toggle && (
                        <div
                          className={`${
                            active == menu.menuId ? "h-auto" : "h-0"
                          } w-full overflow-hidden`}
                        >
                          <ul>
                            {menu.subMenus.length > 0
                              ? menu.subMenus.map((sub, index) => (
                                  <Link href={sub.href} key={sub.subMeniId}>
                                    <li className="cursor-pointer w-full py-2 text-gray-500 flex items-center px-2 font-medium hover:text-primary">
                                      <GoDot className="mr-3" />
                                      {sub.title}
                                    </li>
                                  </Link>
                                ))
                              : null}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <Link href={menu.href} key={menu.menuId}>
                      <li className="cursor-pointer w-full flex items-center py-2 rounded-lg  font-medium px-2 relative duration-100 text-gray-500 hover:bg-primary hover:text-white mb-2">
                        <FiAlignJustify className="mr-3" />
                        {toggle && (
                          <>
                            <span>Layout</span>
                          </>
                        )}
                      </li>
                    </Link>
                  );
                }
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <div
        className={`w-full h-screen  duration-500 ${
          toggle ? "pl-64" : "pl-16"
        }`}
      >
        <div className="w-full h-16 bg-primary fixed">
          <Button onClick={() => setToggle(!toggle)} className="mt-2 ml-4 pl-0">
            {toggle ? (
              <FiAlignJustify className="text-2xl" />
            ) : (
              <FiAlignLeft className="text-2xl" />
            )}
          </Button>
        </div>
        <div className="p-4 w-100 pt-20">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
