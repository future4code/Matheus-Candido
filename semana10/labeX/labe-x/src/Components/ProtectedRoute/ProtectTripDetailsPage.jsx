import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectTripDetailsPage = (parametro) => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            parametro();
        } else {
            history.push("/adm/signin");
        }
    }, [history, parametro]);
};