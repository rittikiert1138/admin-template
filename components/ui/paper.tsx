import React from "react";

interface getProps {
  children: any;
  title: string;
}

const Paper = (props: getProps) => {
  return (
    <div className="mb-4">
      <div className="w-full h-14 bg-white shadow-sm rounded-tl-md rounded-tr-md flex items-center px-4">
        <h2 className="text-xl font-medium">{props.title}</h2>
      </div>
      <div className="w-full m-h-60 bg-white border shadow-sm border-t-1 border-r-0 border-l-0 border-b-0 rounded-bl-md rounded-br-md p-4">
        {props.children}
      </div>
    </div>
  );
};

export { Paper };
