/* eslint-disable */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Menu from "@mui/material/Menu";
import StyledHorizontalLine from "../../utilities/StyledHorizontalLine/StyledHorizontalLine";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Button } from "@mui/material";
import { RoundedButton } from "../HomePageCards/HomePageCards.style";
import { CommentCard, NavLink } from "./CommentsCard.style";
import {
  StyledButton,
  StyledMenuItem
} from "../HomePageCards/HomePageCards.style";
import { BsThreeDots } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { Typography } from "@mui/material";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import { RiSpamLine } from "react-icons/ri";
import { TiCancel } from "react-icons/ti";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { Box } from "@mui/material";
import * as React from "react";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { MdClose } from "react-icons/md";
const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black
  }
}));
const style = {
  position: "absolute",
  top: "100%",
  left: "50%",
  //transform: "translate(-50%, -50%)",

  backgroundColor: "#FFFFFF",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  borderRadius: "4px",
  textAlign: "center",
  zIndex: "2",
  width: "100%"
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "20%",
  //transform: "translate(-50%, -50%)",

  backgroundColor: "#FFFFFF",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  borderRadius: "4px",
  textAlign: "center",
  zIndex: "2",
  width: "40%"
};
/**
 * @typedef {PropType} cardData
 * @property {object} pic the cover of the communities card that is in the home page
 * @property {Array} communities the communities that shall be shown in the card
 * @property {Array} buttons1 the buttons shown over the cover of the communities card cover
 * @property {Array} buttons2 the buttons shown under the cover of the communities card cover
 *
 */
/**
 * this function returns the communities card shown in the home screen
 * @param {PropType} cardData
 */
export default function CommentsForSamePostCard({
  commentsForSamePost,
  postCommentInfo
}) {
  const [charactersCount, setCharactersCount] = useState(0);
  const [addRemovalReasonModalShow, setAddRemovalReasonModalShow] =
    useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [removalReason, setRemovalReason] = useState("");
  const textFieldchangeHandler = (e) => {
    setCharactersCount(e.target.value.length);
    setRemovalReason(e.target.value);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [cardComments, setCardComments] = useState(commentsForSamePost);

  const open = Boolean(anchorEl);
  /**
   * opens the Rising Menu */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  /**
   * closes the Rising Menu */
  const handleClose = (clicked, clickedItem, index) => {
    if (clickedItem == 1) {
      saveButtonClickHandler(clicked, index);
    }
    if (clickedItem == 3) {
      deleteCommentHandler(clicked, index);
    }
    setAnchorEl(null);
  };

  const [anchorElShare, setAnchorElShare] = useState(null);
  const openShare = Boolean(anchorElShare);
  /**
   * opens the Rising Menu */
  const handleClickShare = (event) => {
    setAnchorElShare(event.currentTarget);
  };
  /**
   * closes the Rising Menu */
  const handleCloseShare = (clicked, link) => {
    if (clicked == 1) {
      navigator.clipboard.writeText(link);
    }
    setAnchorElShare(null);
  };
  const spamButtonClickHandler = (clicked, index) => {
    console.log("spaaaaaaaaaaam");
    const newComments = [...commentsForSamePost];
    newComments[index].spam = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };
  const lockButtonClickHandler = (clicked, index) => {
    console.log("lock");
    const newComments = [...commentsForSamePost];
    newComments[index].locked = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };
  const approveButtonClickHandler = (clicked, index) => {
    console.log("approve");
    const newComments = [...commentsForSamePost];
    newComments[index].approved = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
    spamButtonClickHandler(!clicked, index);
    removeButtonClickHandler(!clicked, index);
    submitRemovalReason(!clicked, index, "");
  };
  const removeButtonClickHandler = (clicked, index) => {
    console.log("remove");
    const newComments = [...commentsForSamePost];
    newComments[index].removed = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };
  const saveButtonClickHandler = (clicked, index) => {
    console.log("saveeeeeeeeeee");
    const newComments = [...commentsForSamePost];
    newComments[index].saved = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };

  const addRemovalReason = (clicked) => {
    setAddRemovalReasonModalShow(clicked);
  };
  const submitRemovalReason = (clicked, index, removalReason) => {
    console.log("submiiiiiiited");
    const newComments = [...commentsForSamePost];
    newComments[index].hasRemovalReason = clicked;
    newComments[index].removalReason = removalReason;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
    setAddRemovalReasonModalShow(false);
  };
  const deleteCommentHandler = (clicked, index) => {
    setDeleteModalShow(clicked);
    // console.log("submiiiiiiited");
    // const newComments = [...commentsForSamePost];
    // newComments[index].hasRemovalReason = clicked;

    // commentsForSamePost = [...newComments];
    // setCardComments(commentsForSamePost);
    // setAddRemovalReasonModalShow(false);
  };
  return (
    <CommentCard>
      <Box
        sx={{
          display: "flex",
          padding: "1.5rem",
          border: "2px solid #1a1a1b12",
          "&:hover": {
            border: "2px solid #ccc"
          }
        }}
      >
        <FaRegCommentAlt size={24} color="#7c7c7c" />
        &ensp;
        <Typography variant="h6" sx={{ fontWeight: "300", color: "#9b9b9b" }}>
          <span style={{ color: "#0079d3" }}> {postCommentInfo.userName} </span>{" "}
          commented on {postCommentInfo.postTitle} &nbsp;{" "}
          <span style={{ color: "#0079d3" }}>
            {postCommentInfo.postLink !== null
              ? postCommentInfo.postLink
              : null}
          </span>
          <span>
            {postCommentInfo.postLink !== null ? (
              <GoLinkExternal color="#0079d3" size={12} />
            ) : null}
          </span>
          <span style={{ color: "#1a1a1b", fontWeight: "500" }}>
            {" "}
            {postCommentInfo.communityName}{" "}
          </span>{" "}
          . Posted by
          <span> {postCommentInfo.postOwner} </span>
        </Typography>
      </Box>
      <List
        sx={{
          width: "100%",
          padding: "0"
        }}
      >
        {commentsForSamePost.map((comment, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              "&:hover": {
                border: "2px solid #ccc"
              }
            }}
          >
            {comment.reply ? (
              <>
                <div
                  style={{
                    borderLeft: "2px dashed #EDEFF1",
                    margin: "12px 16px"
                  }}
                ></div>
                <div
                  style={{
                    borderLeft: "2px dashed #EDEFF1",
                    margin: "12px 16px 12px 3px"
                  }}
                ></div>
              </>
            ) : (
              <div
                style={{
                  borderLeft: "2px dashed #EDEFF1",
                  margin: "12px 16px"
                }}
              ></div>
            )}
            <ListItem
              sx={{
                width: "100%",
                alignItems: "center",
                display: "block",
                padding: "0",
                margin: "0",
                backgroundColor:
                  comment.spam || comment.removed
                    ? "rgba(255,88,91,.05)"
                    : "#ffffff",
                border:
                  comment.spam || comment.removed ? "2px solid #ff585b" : "0"
              }}
            >
              <div style={{ color: "#7c7c7c", padding: "3px" }}>
                <Typography variant="h6" sx={{ fontWeight: "300" }}>
                  <span style={{ color: "#1c1c1c" }}>{comment.userName}</span>{" "}
                  {comment.noVotes}
                  {comment.noVotes == 1 ? "point" : "points"} . {comment.time}{" "}
                  {comment.locked ? (
                    <BiLockAlt size={14} color="#FFD635" />
                  ) : null}
                  {comment.spam ? (
                    <RiSpamLine size={12} color="#ff585b" />
                  ) : null}
                  {comment.removed ? (
                    <>
                      <TiCancel size={12} color="#ff585b" />{" "}
                      <BootstrapTooltip
                        title={
                          comment.hasRemovalReason ? comment.removalReason : ""
                        }
                        placement="top"
                        sx={{ "&span": { fontSize: "50px" } }}
                      >
                        <span
                          onClick={() => addRemovalReason(true)}
                          style={{ color: "#ff585b", cursor: "pointer" }}
                        >
                          {comment.hasRemovalReason
                            ? "Removal Reason"
                            : "Add a removal reason"}
                        </span>
                      </BootstrapTooltip>
                      {addRemovalReasonModalShow ? (
                        <div style={style}>
                          <form>
                            <div
                              style={{
                                padding: "40px 16px",
                                display: "flex",
                                flexDirection: "column"
                              }}
                            >
                              <Typography variant="h5" component="h2">
                                You don't have any removal reasons yet
                              </Typography>
                              <RoundedButton
                                sx={{
                                  fontSize: "1.4rem",
                                  textTransform: "none",
                                  alignSelf: "flex-start"
                                }}
                                variant="text"
                              >
                                Add a removal reason
                              </RoundedButton>
                            </div>

                            <div
                              style={{
                                backgroundColor: "#Edeff1",
                                display: "flex",
                                alignItems: "flex-start",
                                flexDirection: "column",
                                padding: "1.6rem"
                              }}
                            >
                              <Typography
                                sx={{ padding: "4px" }}
                                variant="h5"
                                component="h2"
                              >
                                Mod note (Only mods will see the note)
                              </Typography>
                              <textarea
                                type="text"
                                name="removalreason"
                                onChange={textFieldchangeHandler}
                                placeholder="This is a short note to your mod team on why the content was removed"
                                style={{
                                  border: "0",
                                  width: "100%",
                                  padding: "10px",
                                  resize: "none",
                                  fontSize: "14px",
                                  "& :focus": {
                                    outline: "blue auto 2px" // ?
                                  },
                                  margin: "6px 2px",
                                  borderRadius: "4px"
                                }}
                              />
                              <div
                                style={{
                                  padding: "6px",
                                  color:
                                    charactersCount < 100
                                      ? "#7c7c7c"
                                      : "#ea0027",
                                  fontSize: "12px"
                                }}
                              >
                                {100 - charactersCount} characters remaining
                              </div>
                              <div
                                style={{
                                  alignSelf: "flex-end",
                                  padding: "6px"
                                }}
                              >
                                <RoundedButton
                                  sx={{
                                    marginLeft: "3rem",
                                    fontSize: "1.6rem",
                                    padding: "2px 18px",
                                    margin: "0 0.4rem 0.4rem 0",
                                    maxWidth: "95px"
                                  }}
                                  variant="outlined"
                                  disableElevation
                                  onClick={() => addRemovalReason(false)}
                                >
                                  Cancel
                                </RoundedButton>
                                <RoundedButton
                                  sx={{
                                    marginLeft: "3rem",
                                    fontSize: "1.6rem",
                                    padding: "2px 18px",
                                    ":hover": {
                                      backgroundColor: "#1484D6"
                                    },
                                    margin: "0 0.4rem 0.4rem 0",
                                    "& 	.Mui-disabled:after": {
                                      backgroundColor: "black"
                                    }
                                  }}
                                  variant="contained"
                                  disableElevation
                                  disabled={
                                    !(
                                      charactersCount > 0 &&
                                      charactersCount <= 100
                                    )
                                  }
                                  type="submit"
                                  onClick={() =>
                                    submitRemovalReason(
                                      true,
                                      index,
                                      removalReason
                                    )
                                  }
                                >
                                  Submit
                                </RoundedButton>
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : null}
                    </>
                  ) : null}
                  {!comment.spam && comment.approved && !comment.removed ? (
                    <AiFillCheckCircle size={12} color="#46D160" />
                  ) : null}
                </Typography>
              </div>

              <div>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "300", padding: "3px" }}
                >
                  {comment.content}
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#7c7c7c",
                  padding: "3px"
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    padding: "0 4px",
                    minWidth: "3rem",
                    fontWeight: "500",
                    fontSize: "12.5px",
                    textTransform: "none",
                    padding: "2px",
                    color: "#7c7c7c",
                    "&:hover": {
                      backgroundColor: "#FFFFFF"
                    }
                  }}
                >
                  Reply
                </Button>
                <Button
                  variant="text"
                  id="basic-buttonShare"
                  aria-controls={openShare ? "basic-menuShare" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openShare ? "true" : undefined}
                  onClick={handleClickShare}
                  sx={{
                    padding: "0 4px",
                    minWidth: "3rem",
                    fontWeight: "500",
                    fontSize: "12.5px",
                    textTransform: "none",
                    padding: "2px",
                    color: "#7c7c7c",
                    "&:hover": {
                      backgroundColor: "#FFFFFF"
                    }
                  }}
                >
                  Share
                </Button>
                <Menu
                  elevation={1}
                  id="basic-menuShare"
                  anchorEl={anchorElShare}
                  open={openShare}
                  onClose={() => handleCloseShare(0, " ")}
                  MenuListProps={{
                    "aria-labelledby": "basic-buttonShare"
                  }}
                >
                  <StyledMenuItem
                    onClick={() => handleCloseShare(1, comment.commentLink)}
                  >
                    <BsLink45Deg size={18} color="#7c7c7c" /> Copy Link
                  </StyledMenuItem>
                </Menu>

                <Button
                  variant="text"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    padding: "0 4px",
                    minWidth: "3rem"
                  }}
                >
                  <BsThreeDots size={16} color="#7c7c7c" />
                </Button>
                <Menu
                  elevation={1}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => handleClose(true, 0, index)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button"
                  }}
                >
                  {!comment.saved ? (
                    <StyledMenuItem onClick={() => handleClose(true, 1, index)}>
                      <BiSave size={16} color="#7c7c7c" /> &nbsp; Save
                    </StyledMenuItem>
                  ) : (
                    <StyledMenuItem
                      sx={{ color: "#0272C4" }}
                      onClick={() => handleClose(false, 1, index)}
                    >
                      <FaSave size={16} color="#0272C4" /> &nbsp; Unsave
                    </StyledMenuItem>
                  )}
                  <StyledMenuItem onClick={() => handleClose(true, 2, index)}>
                    <MdOutlineModeEditOutline size={16} color="#7c7c7c" />{" "}
                    &nbsp; Edit
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => handleClose(true, 3, index)}>
                    <MdDeleteOutline size={16} color="#7c7c7c" /> &nbsp; Delete
                  </StyledMenuItem>
                </Menu>
                {/* {deleteModalShow ? (
                  <div style={style2}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column"
                      }}
                    >
                      <div
                        style={{
                          borderBottom: "1px solid #EDEFF1",
                          width: "100%",
                          textAlign: "left",
                          padding: "15px 8px 15px 15px",
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Typography
                          varient="h2"
                          sx={{ fontSize: "16px", fontWeight: "500" }}
                        >
                          Delete Comment
                        </Typography>
                        <MdClose size={24} color="#7c7c7c" />
                      </div>
                      <div style={{ padding: "20px 8px 20px 15px" }}>
                        <Typography
                          varient="h6"
                          sx={{ fontSize: "14px", fontWeight: "500" }}
                        >
                          Are you sure you want to delete your comment ?
                        </Typography>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#Edeff1",
                          display: "flex",
                          justifyContent: "end"
                        }}
                      >
                        <div
                          style={{
                            // alignSelf: "flex-end",
                            padding: "6px",
                            backgroundColor: "#Edeff1",
                            padding: "1rem"
                          }}
                        >
                          <RoundedButton
                            sx={{
                              marginLeft: "3rem",
                              fontSize: "1.6rem",
                              padding: "2px 20px",
                              margin: "0 0.4rem 0.4rem 0",
                              maxWidth: "95px"
                            }}
                            variant="outlined"
                            disableElevation
                          >
                            Keep
                          </RoundedButton>
                          <RoundedButton
                            sx={{
                              marginLeft: "3rem",
                              fontSize: "1.6rem",
                              padding: "2px 20px",
                              ":hover": {
                                backgroundColor: "#1484D6"
                              },
                              margin: "0 0.4rem 0.4rem 0"
                            }}
                            variant="contained"
                            disableElevation
                            type="submit"
                          >
                            Delete
                          </RoundedButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null} */}
                {comment.isModerator ? (
                  <>
                    {comment.spam || comment.removed ? (
                      <Button
                        variant="text"
                        onClick={() => approveButtonClickHandler(true, index)}
                        sx={{
                          padding: "0 4px",
                          minWidth: "3rem",
                          fontWeight: "500",
                          fontSize: "12.5px",
                          textTransform: "none",
                          padding: "2px 2px 2px 5px",
                          color: "#7c7c7c",
                          "&:hover": {
                            backgroundColor: "#FFFFFF"
                          },
                          borderLeft: "2px solid #EDEFF1"
                        }}
                      >
                        <AiOutlineCheckCircle size={24} color="#7c7c7c" />{" "}
                        <span style={{ padding: "0 1px" }}>Approve</span>
                      </Button>
                    ) : null}
                    {!comment.removed ? (
                      <Button
                        variant="text"
                        onClick={() => removeButtonClickHandler(true, index)}
                        sx={{
                          padding: "0 4px",
                          minWidth: "3rem",
                          fontWeight: "500",
                          fontSize: "12.5px",
                          textTransform: "none",
                          padding:
                            !comment.spam && !comment.removed
                              ? "2px 2px 2px 5px"
                              : "2px",
                          color: "#7c7c7c",
                          "&:hover": {
                            backgroundColor: "#FFFFFF"
                          },
                          borderLeft:
                            !comment.spam && !comment.removed
                              ? "2px solid #EDEFF1"
                              : "0"
                        }}
                      >
                        <TiCancel size={24} color="#7c7c7c" />{" "}
                        <span style={{ padding: "0 1px" }}>Remove</span>
                      </Button>
                    ) : null}
                    {!comment.removed ? (
                      <Button
                        variant="text"
                        onClick={() => spamButtonClickHandler(true, index)}
                        sx={{
                          padding: "0 4px",
                          minWidth: "3rem",
                          fontWeight: "500",
                          fontSize: "12.5px",
                          textTransform: "none",
                          padding: "2px",
                          color: "#7c7c7c",
                          "&:hover": {
                            backgroundColor: "#FFFFFF"
                          }
                        }}
                      >
                        <RiSpamLine size={24} color="#7c7c7c" />{" "}
                        <span style={{ padding: "0 1px" }}>Spam</span>
                      </Button>
                    ) : null}
                    {!comment.locked ? (
                      <Button
                        variant="text"
                        onClick={() => lockButtonClickHandler(true, index)}
                        sx={{
                          padding: "0 4px",
                          minWidth: "3rem",
                          fontWeight: "500",
                          fontSize: "12.5px",
                          textTransform: "none",
                          padding: "2px",
                          color: "#7c7c7c",
                          "&:hover": {
                            backgroundColor: "#FFFFFF"
                          }
                        }}
                      >
                        <BiLockAlt size={24} color="#7c7c7c" />{" "}
                        <span style={{ padding: "0 1px" }}>Lock</span>
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        onClick={() => lockButtonClickHandler(false, index)}
                        sx={{
                          padding: "0 4px",
                          minWidth: "3rem",
                          fontWeight: "500",
                          fontSize: "12.5px",
                          textTransform: "none",
                          padding: "2px",
                          color: "#7c7c7c",
                          "&:hover": {
                            backgroundColor: "#FFFFFF"
                          }
                        }}
                      >
                        <BiLockAlt size={24} color="#7c7c7c" />{" "}
                        <span style={{ padding: "0 1px" }}>UnLock</span>
                      </Button>
                    )}
                  </>
                ) : null}
              </div>
              {index < commentsForSamePost.length - 1 ? (
                <StyledHorizontalLine
                  marginBottom={"0"}
                  marginLeft={comment.reply ? "-4.2" : "-2.3"}
                  marginTop={"0.3"}
                  marginRight={"0.6"}
                  height={"1.5"}
                />
              ) : null}
            </ListItem>
          </Box>
        ))}
      </List>
    </CommentCard>
  );
}
