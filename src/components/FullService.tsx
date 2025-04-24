// components/FullService.tsx
import { FC } from "react";
import descriptions from "/data/text/descriptions.tsx";

interface FullServiceProps {
  service: string;
}

const FullService: FC<FullServiceProps> = ({ service }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto text-left">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 capitalize">{service.replace("_", " ")}</h2>
      <div className="text-gray-700 text-sm space-y-4">{descriptions[service]}</div>
    </div>
  );
};

export default FullService;
