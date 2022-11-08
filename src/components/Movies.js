import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Movies() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)
        if (token === null) {
            navigate('/');
        }
        // eslint-disable-next-line
    }, [])

    return (
        <h2>Listas</h2>
    )
}