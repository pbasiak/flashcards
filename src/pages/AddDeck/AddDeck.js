import { clearCache } from "axios-hooks";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
import DeckForm from "../../components/Decks/DeckForm";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import ROUTES from "../../const/routes";
import { useAddDeck } from "../../hooks/useDecks";

function AddDeck() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Field is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      tags: [],
    },
    validate,
    onSubmit: () => {
      refetch().then(({ data: { id } }) => {
        enqueueSnackbar("Deck added succesfully!", { variant: "success" });
        clearCache();
        history.push(`${ROUTES.Decks.path}/${id}`);
      });
    },
  });

  const { values } = formik;

  const deck = {
    title: values.title,
    tags: values.tags,
  };

  const handleCancel = () => history.push(ROUTES.Decks.path);
  const { refetch } = useAddDeck({ deck });

  return (
    <PageWithSidebarTemplate title={`Add Deck`}>
      <DeckForm
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        values={formik.values}
        errors={formik.errors}
        handleCancel={handleCancel}
        setFieldValue={formik.setFieldValue}
        submitText="Add Deck"
      />
    </PageWithSidebarTemplate>
  );
}

export default AddDeck;
