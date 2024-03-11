import React from "react";

const SectionWrapper = ({
  height,
  children,
  color,
  shadow,
  justifyContent,
  alignItems,
  gap,
  ...rest
}) => {
  const classNames = Object.entries(rest)
    .map(([key, value]) => {
      if (typeof value === "boolean") {
        return value ? ` ${key}` : "";
      }
      return ` ${key}-${value}`;
    })
    .join("");

  return (
    <div
      className={`w-full flex justify-center items-center  ${color} ${shadow} ${classNames} gap-${gap}`}
      style={{ height }}
    >
      <div
        className={`md:w-[85%] w-[90%] flex justify-${justifyContent} items-${alignItems}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
