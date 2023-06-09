import { Navigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";



function ProtectedRoute({children}) {
    const { user } = UserAuth();

    if (!user) {
        return (
            <Navigate to='/' />
        );
    }
return children
}
export { ProtectedRoute };