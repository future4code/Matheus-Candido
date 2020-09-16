import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectCreateTripPage = (parametro) => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            history.push("/adm/trips/create");
        } else {
            history.push("/adm/signin");
        }
    }, [history, parametro]);
};