import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import UpdateAdd from "../../Containers/UpdateAdd/updateAdd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #DDD",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  outline: "none",

  "& h1": {
    marginBottom: "20px",
    textAlign: "center",
  },

  "& div": {
    display: "flex",
    gap: "3px",
    fontFamily: "var(--secondFont)",
    alignItems: "center",
    margin: "10px auto",
  },

  "& div a": {
    color: "var(--blue)",
    fontFamily: "var(--secondFont)",
  },
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>
        أضف إعلانك
        <Add />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>ما نوع الإعلان الذي تريد إضافته ؟</h1>
          <div>
            <Link onClick={handleClose} to={"newadd"}>
              اضغط هنا
            </Link>
            إذا كنت تريد إضافة إعلان مجاني
          </div>

          <div>
            <Link onClick={handleClose} to={"paidadds"}>
              اضغط هنا
            </Link>
            إذا كنت تريد إضافة إعلان مدفوع
          </div>
        </Box>
      </Modal>
    </div>
  );
}
