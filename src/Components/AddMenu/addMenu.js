import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Edit, Delete, MoreVert, Share } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../baseURL";
import { useNavigate, useParams } from "react-router";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus({
  setLoading,
  setIsOpen,
  setCopySuccess,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const deleteHandler = () => {
    setLoading(true);
    axios
      .delete(`${BASE_URL}Business/Delete?id=${id}`)
      .then((res) => {
        console.log(res.data);
        setAnchorEl(null);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const updateHandler = () => {
    setIsOpen(true);
    setAnchorEl(null);
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
      setAnchorEl(null);
      setTimeout(() => {
        setCopySuccess(false);
      }, 4000);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <div>
      <IconButton
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={updateHandler}
          disableRipple
          sx={{
            fontFamily: "var(--mainFont)",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          تعديل
          <Edit />
        </MenuItem>
        <MenuItem
          onClick={deleteHandler}
          disableRipple
          sx={{
            fontFamily: "var(--mainFont)",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          حذف
          <Delete />
        </MenuItem>

        <MenuItem
          onClick={() => copyToClipBoard(window.location.href)}
          disableRipple
          sx={{
            fontFamily: "var(--mainFont)",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          مشاركة
          <Share />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
