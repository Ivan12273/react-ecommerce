import { useSelector } from "react-redux";


const withAuth = (WrappedComponent, url) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const token = useSelector(state => state.auth.token)
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