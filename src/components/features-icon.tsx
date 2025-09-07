import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si"; // Simple Icons
import * as GiIcons from "react-icons/gi"; // só se precisar de outros

interface FeatureProps {
  feature_icon_name?: string; // exemplo: "FaHome", "SiReact", "MdSettings"
}

const FeatureIcon: React.FC<FeatureProps> = ({ feature_icon_name }) => {
  let IconComponent: React.ComponentType | null = null;

  if (feature_icon_name) {
    IconComponent =
      (FaIcons as any)[feature_icon_name] ||
      (MdIcons as any)[feature_icon_name] ||
      (SiIcons as any)[feature_icon_name] ||
      (GiIcons as any)[feature_icon_name] ||
      null;
  }

  return <div>{IconComponent && <IconComponent />}</div>;
};

export default FeatureIcon;
