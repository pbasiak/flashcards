import { useSnackbar } from "notistack";
import { Redirect, Route } from "react-router";
import ROUTES from "../../const/routes";
import { useUser } from "../../hooks/useUser";

function AdminRoute({ component: Component, ...rest }) {
  const { enqueueSnackbar } = useSnackbar();
  const { isRoleAdmin } = useUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isRoleAdmin) {
          enqueueSnackbar("Access denied.", {
            variant: "error",
          });

          return <Redirect to={{ pathname: ROUTES.Dashboard.path }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default AdminRoute;
