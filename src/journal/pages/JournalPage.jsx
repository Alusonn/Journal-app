import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal";
import { useDispatch, useSelector } from "react-redux";

export const JournalPage = () => {
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  const { isSaving, active } = useSelector((state) => state.journal);

  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure iusto
        eligendi repudiandae perferendis obcaecati, laudantium voluptates ut ad
        quibusdam fugiat ipsa necessitatibus sunt cum laborum harum aspernatur
        minima eum iste.
      </Typography> */}

      {!!active ? <NoteView /> : <NothingSelectedView />}
      {/*  */}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  );
};
