import Airplane from "@icons/airplane.svg";
import Bus from "@icons/bus.svg";
import Ship from "@icons/ship.svg";

const typeTourData = {
  ship: { label: "کشتی", icon: <Ship /> },
  airplane: { label: "هواپیما", icon: <Airplane /> },
  bus: { label: "اتوبوس", icon: <Bus /> },
};

export const getTypeTour = (type) => {
  return typeTourData[type] || { label: "نامشخص", icon: null };
};
