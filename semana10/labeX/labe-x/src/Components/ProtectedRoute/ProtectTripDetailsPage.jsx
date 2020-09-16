import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectTripDetailsPage = (parametro2) => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            parametro2();
        } else {
            history.push("/adm/signin");
        }
    }, [history, parametro2]);
};