import { CircularProgress } from "@material-ui/core";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useHistory, useParams } from "react-router";
import DeckForm from "../../components/Decks/DeckForm";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import ROUTES from "../../const/routes";
import { useDeck, useEditDeck } from "../../hooks/useDecks";
import { useTags } from "../../hooks/useTags";

function EditDeck() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { deckId } = useParams();
  const { refetchTags } = useTags();
  const {
    deck: { title = "", tags = [], id },
    isDeckLoading,
  } = useDeck({ id: deckId });

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = "Field is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title,
      tags,
    },
    enableReinitialize: true,
    validate,
    onSubmit: () => {
      executeEditDeck().then(({ data: { id } }) => {
        enqueueSnackbar("Deck updated succesfully!", { variant: "success" });
        refetchTags().then(() => {
          history.push(`/decks/${id}`);
        });
      }).catch(() => {
        enqueueSnackbar("Unauthorized!", { variant: "error" });
      });
    },
  });

  const handleCancel = () => history.push(ROUTES.Decks.path);
  const { executeEditDeck } = useEditDeck({ deck: formik.values, id });

  return (
    <PageWithSidebarTemplate title={`Edit Deck`}>
      {isDeckLoading ? (
        <CircularProgress />
      ) : (
        <DeckForm
          handleSubmit={formik.handleSubmit}
          handleChange={formik.handleChange}
          values={formik.values}
          errors={formik.errors}
          handleCancel={handleCancel}
          setFieldValue={formik.setFieldValue}
          submitText="Save"
        />
      )}
    </PageWithSidebarTemplate>
  );
}

export default EditDeck;
