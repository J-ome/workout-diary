import { createContext, useContext, useState } from "react";

const DistanceContext = createContext();
const useDistanceContext = () => useContext(DistanceContext);

const DistanceProvider = ({ children }) => {
    const [distanceUnit, setDistanceUnit] = useState("km")

    const value = {
        distanceUnit,
        setDistanceUnit
    };

    return (
        <DistanceContext.Provider value={value} >
            {children}
        </DistanceContext.Provider>
    )
}


export { DistanceContext, useDistanceContext, DistanceProvider };