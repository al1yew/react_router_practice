import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ user, children }) => {

    return (
        !user ? <Navigate to="/" /> : children
    )
}
export default ProtectedRoute