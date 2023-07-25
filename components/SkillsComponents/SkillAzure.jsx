import React from "react";
import Image from "next/image";
import AzureSvg from "../../public/assets/skills/azure.svg";

const AzureSkill = () => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={AzureSvg} alt="/" width={64} height={64} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>Azure</h3>
        </div>
      </div>
    </div>
  );
};

export default AzureSkill;
