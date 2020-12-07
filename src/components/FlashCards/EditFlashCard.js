import { useFormik } from 'formik';
import React from 'react';
import { useEditFlashCard, useFlashCard } from '../../hooks/useFlashCards';
import PageWithSidebarTemplate from '../PageWithSidebarTemplate/PageWithSidebarTemplate';
import { useSnackbar } from 'notistack';
import FlashCardForm from './FlashCardForm';
import { useHistory, useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

function EditFlashCard() {
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
    const history = useHistory();
    const { flashCard, isFlashCardLoading, refetchFlashCard } = useFlashCard({ id });

    const validate = (values) => {
        const errors = {};

        if (!values.title) {
            errors.title = 'Field is required'
        }

        if (!values.content) {
            errors.content = 'Field is required'
        }

        if (!values.tags) {
            errors.tags = 'Field is required'
        }

        if (!values.decks) {
            errors.decks = 'Field is required'
        }

        return errors;
    }

    const { title = '', content = '', tags = [], decks = [] } = flashCard;

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
            executeEditFlashCard().then(() => {
                enqueueSnackbar('FlashCard edited succesfully!', { variant: "success" });
            }).then(() => {
                refetchFlashCard().then(() => history.push(`/flashcards/${id}`));
            });
        },
    });
    const { executeEditFlashCard } = useEditFlashCard(formik.values, id);
    const handleCancel = () => history.push(`/flashcards/${id}`);

    return (
        <PageWithSidebarTemplate title={<>Edit <strong>FlashCard</strong></>}>
            {
                isFlashCardLoading ? <CircularProgress /> :
                    <FlashCardForm
                        handleSubmit={formik.handleSubmit}
                        handleChange={formik.handleChange}
                        values={formik.values} errors={formik.errors}
                        handleCancel={handleCancel}
                        isSubmitDisabled={!formik.dirty}
                        submitText="Save FlashCard"
                    />
            }
        </PageWithSidebarTemplate>
    );
}

export default EditFlashCard;
