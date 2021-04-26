import { Box, Button, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useHistory, useParams } from "react-router";
import { useFlashCard } from "../../hooks/useFlashCards";
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

function SingleFlashCard() {
  const { flashCardId } = useParams();
  const {
    flashCard: { content, tags, decks },
    isFlashCardLoading,
  } = useFlashCard({ id: flashCardId });
  const classes = useStyles();
  const history = useHistory();
  const tagUrl = (tag) => history.push(`/tag/${tag}`);
  const deckUrl = (deckId) => history.push(`/decks/${deckId}`);
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
      <span key={`${item.id}_${item.Title}`}>{item.Title}</span>
    </Button>
  ));

  return (
    <>
      <Box display="flex" alignItems="center" marginBottom="32px">
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
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </>
      </ContentFullWidthTemplate>
    </>
  );
}

export default SingleFlashCard;
