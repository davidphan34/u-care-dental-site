// components/FullService.tsx
import { FC } from "react";
import descriptions from "../../data/text/descriptions";

interface FullServiceProps {
  service: string;
}

const titles: Record<string, string> = {
  bonding: "Fixes for chips and gaps",
  cleaning: "Professional cleanings for a healthier smile",
  crowns: "Restoring strength and beauty to damaged teeth",
  fillings: "Durable fillings that blend seamlessly",
  implants: "Permanent solutions for missing teeth",
  orthodontics: "Straighter teeth with modern orthodontics",
  veneers: "Smile enhancement with custom veneers",
  whitening: "Brighten your smile safely and effectively",
};

const FullService: FC<FullServiceProps> = ({ service }) => {
  return (
    <div className="max-w-6xl mx-auto text-left space-y-10">
      <h2 className="text-4xl font-semibold text-ucare">
        {titles[service] || service.replace("_", " ")}
      </h2>
      <div className="text-ucare text-lg leading-relaxed space-y-6">
        {descriptions[service]}
      </div>
    </div>
  );
};

export default FullService;
