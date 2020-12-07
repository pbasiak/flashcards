import { useFormik } from 'formik';
import React from 'react';
import { useAddFlashCard } from '../../hooks/useFlashCards';
import PageWithSidebarTemplate from '../PageWithSidebarTemplate/PageWithSidebarTemplate';
import { useSnackbar } from 'notistack';
import FlashCardForm from './FlashCardForm';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../const/routes';
import { useTags } from '../../hooks/useTags';

function AddFlashCard() {
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    const { refetchTags } = useTags();

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

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            tags: [],
            decks: [],
        },
        validate,
        onSubmit: (values, actions) => {
            execute().then(() => {
                enqueueSnackbar('FlashCard added succesfully!', { variant: "success" });
                refetchTags();
            });
            
            // formik.resetForm(); TODO: Reset form after submit
        },
    });
    const { execute } = useAddFlashCard(formik.values);

    const handleCancel = () => history.push(ROUTES.FlashCards.path);

    return (
        <PageWithSidebarTemplate title={<>Add <strong>FlashCard</strong></>}>
            <FlashCardForm handleSubmit={formik.handleSubmit} handleChange={formik.handleChange} values={formik.values} errors={formik.errors} handleCancel={handleCancel} />
        </PageWithSidebarTemplate>
    );
}

export default AddFlashCard;
