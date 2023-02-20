import { createContext, useContext, useState } from "react";

export interface Coords {
  longitude: string | null;
  latitude: string | null;
}

export interface LocationContext {
  zipCoords: Coords | null;
  navCoords: Coords | null;
  activeCoords: Coords | null;
  activeCoordType: CoordType;
  setZipCoords: (coords: Coords | null) => void;
  setNavCoords: (coords: Coords | null) => void;
  setActiveCoords: (coords: Coords) => void;
  setActiveCoordType: (type: CoordType) => void;
}

export enum CoordType {
  zip = "zip",
  nav = "nav",
}

const LocationContext = createContext<LocationContext>({
  zipCoords: null,
  navCoords: null,
  activeCoords: null,
  activeCoordType: CoordType.nav,
  setZipCoords: () => {},
  setNavCoords: () => {},
  setActiveCoords: () => {},
  setActiveCoordType: () => {},
});

const LocationProvider = (props: any) => {
  const [zipCoords, setZipCoords] = useState<Coords | null>(null);
  const [navCoords, setNavCoords] = useState<Coords | null>(null);
  const [activeCoords, setActiveCoords] = useState<Coords | null>(null);
  const [activeCoordType, setActiveCoordType] = useState(CoordType.nav);

  const value = {
    zipCoords,
    navCoords,
    activeCoords,
    activeCoordType,
    setZipCoords,
    setNavCoords,
    setActiveCoords,
    setActiveCoordType,
  };

  return <LocationContext.Provider {...{ value }} {...props} />;
};

export const useLocationContext = () => useContext(LocationContext);

export default LocationProvider;
