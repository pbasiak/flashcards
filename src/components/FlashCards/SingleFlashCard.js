import { Box, Button, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router";
import { useUser } from "../../hooks/useUser";
import ContentFullWidthTemplate from "../ContentFullWidthTemplate/ContentFullWidthTemplate";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "800px",
  },
  tags: {
    fontWeight: "600",
  },
  content: {},
  tagItem: {
    marginRight: theme.spacing(1),
  },
  deckItem: {
    marginRight: theme.spacing(1),
  },
}));

function SingleFlashCard({ flashCard, flashCardId, isFlashCardLoading }) {
  const { content, tags, decks } = flashCard;
  const classes = useStyles();
  const history = useHistory();
  const { isRoleAdmin } = useUser();
  const tagUrl = (tag) => history.push(`/tag/${tag}`);
  const deckUrl = (deckId) => history.push(`/decks/${deckId}`);
  const handleEditClick = () => history.push(`/flashcards/${flashCardId}/edit`);
  const isLoading = isFlashCardLoading;

  const tagsList = tags?.map((item) => (
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      onClick={() => tagUrl(item.name)}
      className={classes.tagItem}
    >
      <span key={`${item.id}_${item.name}`}>#{item.name}</span>
    </Button>
  ));

  const decksList = decks?.map((item) => (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      onClick={() => deckUrl(item.id)}
      className={classes.deckItem}
    >
      <span key={`${item.id}_${item.title}`}>{item.title}</span>
    </Button>
  ));

  return (
    <>
      <Box display="flex" alignItems="center" marginBottom="32px">
        {isRoleAdmin && (
          <Box marginRight="32px">
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          </Box>
        )}
        <Box className="tags" marginRight="16px">
          <span className={classes.tags}>
            {isLoading ? <Skeleton width="150px" /> : tagsList}
          </span>
        </Box>
        <Box className="decks">
          <span className={classes.tags}>
            {isLoading ? <Skeleton width="150px" /> : decksList}
          </span>
        </Box>
      </Box>
      <ContentFullWidthTemplate>
        <>
          {isLoading ? (
            <Skeleton />
          ) : (
            <div className={classes.content}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </>
      </ContentFullWidthTemplate>
    </>
  );
}

export default SingleFlashCard;
