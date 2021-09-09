import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";


const withAuth = (WrappedComponent: any, url: string) => {
  return (props: any) => {
    if (typeof window !== "undefined") {
      const token = useSelector((state: RootState) => state.auth.token)
      if (!token) {
        window.location.assign(url ? url : "/login");
        return null;
      }
      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export default withAuth;