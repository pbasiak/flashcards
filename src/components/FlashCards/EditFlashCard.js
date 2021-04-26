import { useFormik } from "formik";
import { useEditFlashCard, useFlashCard } from "../../hooks/useFlashCards";
import PageWithSidebarTemplate from "../PageWithSidebarTemplate/PageWithSidebarTemplate";
import { useSnackbar } from "notistack";
import FlashCardForm from "./FlashCardForm";
import { useHistory, useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import delay from "lodash/delay";

function EditFlashCard() {
  const { enqueueSnackbar } = useSnackbar();
  const { flashCardId } = useParams();
  const history = useHistory();
  const { flashCard, isFlashCardLoading, refetchFlashCard } = useFlashCard({
    id: flashCardId,
  });

  const validate = (values) => {
    const errors = {};
    const FIELD_REQUIRED = "Field is required";

    if (!values.title) {
      errors.title = FIELD_REQUIRED;
    }

    if (!values.content) {
      errors.content = FIELD_REQUIRED;
    }

    if (!values.tags) {
      errors.tags = FIELD_REQUIRED;
    }

    if (!values.decks) {
      errors.decks = FIELD_REQUIRED;
    }

    return errors;
  };

  const { title = "", content = "", tags = [], decks = [] } = flashCard;

  const formik = useFormik({
    initialValues: {
      title: title,
      content: content,
      tags: [...tags],
      decks: [...decks],
    },
    validate,
    enableReinitialize: true,
    onSubmit: (values, actions) => {
      executeEditFlashCard()
        .then(() => {
          enqueueSnackbar("Saving and redirecting...", {
            variant: "info",
            autoHideDuration: 1500,
          });
          delay(
            () =>
              enqueueSnackbar("FlashCard edited succesfully!", {
                variant: "success",
              }),
            1500
          );
        })
        .then(async () => {
          await refetchFlashCard();
          delay(() => history.push(`/flashcards/${flashCardId}`), 1000);
        });
    },
  });
  const { executeEditFlashCard } = useEditFlashCard(formik.values, flashCardId);
  const handleCancel = () => history.goBack();

  return (
    <PageWithSidebarTemplate
      title={
        <>
          Edit <strong>FlashCard</strong>
        </>
      }
    >
      {isFlashCardLoading ? (
        <CircularProgress />
      ) : (
        <FlashCardForm
          handleSubmit={formik.handleSubmit}
          handleChange={formik.handleChange}
          values={formik.values}
          errors={formik.errors}
          handleCancel={handleCancel}
          isSubmitDisabled={!formik.dirty}
          submitText="Save FlashCard"
          setFieldValue={formik.setFieldValue}
        />
      )}
    </PageWithSidebarTemplate>
  );
}

export default EditFlashCard;
