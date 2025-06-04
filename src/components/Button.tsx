import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant: "btn_dark_green" | "btn_light_green" | "btn_white";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexcenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}></Image>}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
