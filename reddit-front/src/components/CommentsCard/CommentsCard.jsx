/* eslint-disable */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import "./CommentCard.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Menu from "@mui/material/Menu";
import StyledHorizontalLine from "../../utilities/StyledHorizontalLine/StyledHorizontalLine";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
import {
  spamComment,
  lockComment,
  approveComment,
  removeComment,
  saveComment,
  deleteComment
} from "../../services/requests/Comment";
import Logo from "../../assets/test.jpg";

// const style = {
//   position: "absolute",
//   top: "100%",
//   left: "50%",
//   //transform: "translate(-50%, -50%)",

//   backgroundColor: "#FFFFFF",
//   boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
//   borderRadius: "4px",
//   textAlign: "center",
//   zIndex: "2",
//   width: "100%"
// };
// const style2 = {
//   position: "absolute",
//   top: "50%",
//   left: "20%",
//   //transform: "translate(-50%, -50%)",

//   backgroundColor: "#FFFFFF",
//   boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
//   borderRadius: "4px",
//   textAlign: "center",
//   zIndex: "2",
//   width: "40%"
// };
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
  const [openMenuArr, setOpenMenuArr] = useState(
    commentsForSamePost.map((element) => false)
  );
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  const [cardComments, setCardComments] = useState(commentsForSamePost);
  const [isCommunityNameHovered, setIsCommunityNameHovered] = useState(false);

  /* This function shows the subreddit info while hovering on the subreddit name */
  const handleHoverOnSubreddit = (communityId) => {
    setIsCommunityNameHovered(true);
    const communityInformation = document.getElementById(
      "community-information-post-" + communityId
    );

    communityInformation.style.display = "block";
    communityInformation.style.visibility = "visible";
  };

  /* This function hides the subreddit info while hovering out the subreddit name */
  const handleHoverOutSubreddit = (communityId) => {
    const communityInformation = document.getElementById(
      "community-information-post-" + communityId
    );
    communityInformation.style.display = "none";
    communityInformation.style.visibility = "hidden";
  };

  /* This function shows the user info while hovering on the username */
  const handleHoverOnUsername = (communityId) => {
    const userInformation = document.getElementById(
      "user-information-post-" + communityId
    );
    userInformation.style.display = "block";
    userInformation.style.visibility = "visible";
  };

  /* This function hides the user info while hovering out the username */
  const handleHoverOutUsername = (communityId) => {
    const userInformation = document.getElementById(
      "user-information-post-" + communityId
    );
    userInformation.style.display = "none";
    userInformation.style.visibility = "hidden";
  };

  /* This function return the subreddit name concatenated with 'r/' */
  const getCommunityName = function () {
    return postCommentInfo.communityName
      ? "r/ ".concat(postCommentInfo.communityName)
      : "community_name";
  };

  /* This function return the username of the person that published the post 'u/' */
  // const getPostedBy = function () {
  //   return postedBy ? 'u/ '.concat(postedBy) : 'user_name';
  // };

  // const open = Boolean(anchorEl);
  /**
   * opens the Rising Menu */
  const handleClick = (index, clicked) => {
    const temp = [...openMenuArr];
    temp[index] = clicked;
    setOpenMenuArr(temp);
    // console.log(openMenuArr);
  };
  const handleOpenConfirmDialog = (id, index) => {
    console.log(openConfirmationDialog);
    setOpenConfirmationDialog(true);
    if (openConfirmationDialog) handleClose(true, 3, id, index);
    console.log(openConfirmationDialog);
  };
  const handleCloseConfirmDialog = () => {
    setOpenConfirmationDialog(false);
  };
  /**
   * closes the Rising Menu */
  const handleClose = (clicked, clickedItem, id, index) => {
    console.log(clicked, clickedItem, id, index);
    if (clickedItem == 1) {
      saveButtonClickHandler(clicked, id);
    }
    if (clickedItem == 3) {
      // setOpenConfirmationDialog(true);
      // handleOpenConfirmDialog();
      // deleteCommentHandler(clicked, id);
    }
    console.log(openConfirmationDialog);
    const temp = [...openMenuArr];
    temp[index] = false;
    setOpenMenuArr(temp);
    setOpenConfirmationDialog(true);
    console.log(openConfirmationDialog);
  };

  // const [anchorElShare, setAnchorElShare] = useState(null);
  // const openShare = Boolean(anchorElShare);
  /**
   * opens the Rising Menu */
  const handleClickShare = (link) => {
    navigator.clipboard.writeText(link);
  };
  // /**
  //  * closes the Rising Menu */
  // const handleCloseShare = (clicked, link) => {
  //   if (clicked == 1) {
  //     navigator.clipboard.writeText(link);
  //   }
  //   setAnchorElShare(null);
  // };
  const spamButtonClickHandler = (clicked, index, id) => {
    console.log("spaaaaaaaaaaam");
    const info = {
      request: {
        spam: clicked
      },
      id: id
    };
    spamComment(info);
    const newComments = [...commentsForSamePost];
    newComments[index].spam = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };
  const lockButtonClickHandler = (clicked, index, id) => {
    console.log("lock");
    const info = {
      request: {
        locked: clicked
      },
      id: id
    };
    lockComment(info);
    const newComments = [...commentsForSamePost];
    newComments[index].locked = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };
  const approveButtonClickHandler = (clicked, index, id) => {
    console.log("approve");
    const info = {
      request: {
        approved: clicked
      },
      id: id
    };
    approveComment(info);
    const newComments = [...commentsForSamePost];
    newComments[index].approved = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
    spamButtonClickHandler(!clicked, index, id);
    removeButtonClickHandler(!clicked, index, id);
    // submitRemovalReason(!clicked, index, "");
  };
  const removeButtonClickHandler = (clicked, index, id) => {
    console.log("remove");
    const info = {
      request: {
        removed: clicked
      },
      id: id
    };
    removeComment(info);
    const newComments = [...commentsForSamePost];
    newComments[index].removed = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };
  const saveButtonClickHandler = (clicked, id) => {
    console.log("saveeeeeeeeeee");
    console.log(id);
    const info = {
      request: {
        saved: clicked
      },
      id: id
    };
    saveComment(info);
    const newComments = [...commentsForSamePost];
    const commentToBeSaved = newComments.find(
      (element, index) => element.id == id
    );
    commentToBeSaved.saved = clicked;
    commentsForSamePost = [...newComments];
    setCardComments(commentsForSamePost);
  };

  return (
    <CommentCard>
      <Box
        sx={{
          display: "flex",
          paddingLeft: "1.5rem",
          border: "2px solid #1a1a1b12",
          "&:hover": {
            border: "2px solid #ccc"
          },
          alignItems:'center'
        }}
      >
        <FaRegCommentAlt size={24} color="#7c7c7c" />
        &ensp;
        <h6 style={{ fontWeight: "300", color: "#9b9b9b",fontSize:'16px' }}>
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
          <span
           
          >
            {postCommentInfo.communityName}
          </span>{" "}
          . Posted by
          <span> {postCommentInfo.postOwner} </span>
        </h6>
      </Box>
      <List
        sx={{
          width: "100%",
          padding: "0"
        }}
      >
        {commentsForSamePost.map((comment, index) => (
          <Box
            id={`comment${index}`}
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
                    <TiCancel size={12} color="#ff585b" />
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
                  onClick={() => handleClickShare(comment.commentLink)}
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
                  <BsLink45Deg size={18} color="#7c7c7c" /> Copy Link
                </Button>

                <Button
                  variant="text"
                  id={`basic-button-${comment.id}`}
                  // aria-controls={open ? `basic-menu-${comment.id}` : undefined}
                  // aria-haspopup="true"
                  // aria-expanded={open ? "true" : undefined}
                  onClick={() => handleClick(index, !openMenuArr[index])}
                  sx={{
                    padding: "0 4px",
                    minWidth: "3rem"
                  }}
                >
                  <BsThreeDots size={16} color="#7c7c7c" />
                </Button>
                {openMenuArr[index] && (
                  <ul
                    style={{
                      width: "11.2rem",
                      padding: "0",
                      border: "1px solid #EDEFF1",
                      borderRadius: "4px",
                      boxShadow: "0 2px 4px 0 rgba(28,28,28,0.2)",
                      position: "absolute",
                      zIndex: "10",
                      top: "8rem",
                      listStyle: "none",
                      backgroundColor: "#fff",
                      left: "12rem"
                    }}
                    id={`Menu_${comment.id}`}
                  >
                    {!comment.saved ? (
                      <li
                        style={{
                          padding: "0.8rem 1.6rem 0.8rem 0.8rem",
                          fontSize: "1.4rem",
                          fontWeight: "501",
                          lineHeight: "1.8rem",
                          color: "#878A8C",
                          cursor: "pointer",
                          borderBottom: "1px solid #EDEFF1",
                          "&:hover": {
                            backgroundColor: "#E9F5FD",
                            color: "#1c1c1c"
                          }
                        }}
                        onClick={() => handleClose(true, 1, comment.id, index)}
                      >
                        <BiSave size={16} color="#7c7c7c" /> &nbsp; Save{" "}
                        {/* {`${comment.id}`} */}
                      </li>
                    ) : (
                      <li
                        style={{
                          padding: "0.8rem 1.6rem 0.8rem 0.8rem",
                          fontSize: "1.4rem",
                          fontWeight: "501",
                          lineHeight: "1.8rem",
                          color: "#0272C4",
                          cursor: "pointer",
                          borderBottom: "1px solid #EDEFF1",

                          ":hover": {
                            backgroundColor: "#E9F5FD",
                            color: "#1c1c1c"
                          }
                        }}
                        sx={{ color: "#0272C4" }}
                        onClick={() => handleClose(false, 1, comment.id, index)}
                      >
                        <FaSave size={16} color="#0272C4" /> &nbsp; Unsave
                      </li>
                    )}

                    <li
                      style={{
                        padding: "0.8rem 1.6rem 0.8rem 0.8rem",
                        fontSize: "1.4rem",
                        fontWeight: "501",
                        lineHeight: "1.8rem",
                        color: "#878A8C",
                        cursor: "pointer",
                        borderBottom: "1px solid #EDEFF1",
                        "&:hover": {
                          backgroundColor: "#E9F5FD",
                          color: "#1c1c1c"
                        }
                      }}
                      onClick={() => handleClose(true, 2, comment.id, index)}
                    >
                      <MdOutlineModeEditOutline size={16} color="#7c7c7c" />{" "}
                      &nbsp; Edit
                    </li>
                    <li
                      style={{
                        padding: "0.8rem 1.6rem 0.8rem 0.8rem",
                        fontSize: "1.4rem",
                        fontWeight: "501",
                        lineHeight: "1.8rem",
                        color: "#878A8C",
                        cursor: "pointer",
                        borderBottom: "1px solid #EDEFF1",
                        "&:hover": {
                          backgroundColor: "#E9F5FD",
                          color: "#1c1c1c"
                        }
                      }}
                      id={`buttonDelete${index}`}
                      onClick={() => handleOpenConfirmDialog(comment.id, index)}
                    >
                      <MdDeleteOutline size={16} color="#7c7c7c" /> &nbsp;
                      Delete
                    </li>
                    <Dialog
                      open={openConfirmationDialog}
                      onClose={handleCloseConfirmDialog}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle
                        id="alert-dialog-title"
                        sx={{ fontSize: "18px" }}
                      >
                        Delete post?
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          id="alert-dialog-description"
                          sx={{ fontSize: "15px" }}
                        >
                          Are you sure you want to delete your post? You can not
                          undo this. {`${comment.id}`}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleCloseConfirmDialog}
                          sx={{
                            fontSize: "15px",
                            border: "1px solid #0079d3",
                            color: "#0079d3",
                            fontFamily: "Noto Sans, Arial, sans serif",
                            fontWeight: "700",
                            lineHeight: "1.6rem",
                            letterSpacing: "1.5",
                            minHeight: "2.4rem",
                            minWidth: "4rem",
                            padding: "1rem 2rem",
                            marginLeft: "1rem",
                            alignItems: "center",
                            borderRadius: "999.9rem",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textTransform: "Capitalize",
                            "&:hover": {
                              borderColor: "#7c7c7c",
                              color: "#7c7c7c"
                            }
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          // onClick={handleDeletePost}
                          autoFocus
                          sx={{
                            fontSize: "15px",
                            border: "none",
                            backgroundColor: "#0079d3",
                            color: "white",
                            fontFamily: "Noto Sans, Arial, sansserif",
                            fontWeight: "700",
                            lineHeight: "1.6rem",
                            letterSpacing: "1.5",
                            minHeight: "2.4rem",
                            minWidth: "4rem",
                            padding: "1rem 2rem",
                            marginLeft: "1rem",
                            alignItems: "center",
                            borderRadius: "999.9rem",
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textTransform: "Capitalize",
                            "&:hover": {
                              backgroundColor: "#f75b5b"
                            }
                          }}
                        >
                          Delete Post
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </ul>
                )}

                {/* <Menu
                  elevation={1}
                  id={`basic-menu-${comment.id}`}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => handleClose(true, 0, comment.id)}
                  MenuListProps={{
                    "aria-labelledby": `basic-button-${comment.id}`
                  }}
                >
                  {!comment.saved ? (
                    <StyledMenuItem onClick={() => handleClose(true, 1, comment.id)}>
                      <BiSave size={16} color="#7c7c7c" /> &nbsp; Save {`${comment.saved}`}
                    </StyledMenuItem>
                  ) : (
                    <StyledMenuItem
                      sx={{ color: "#0272C4" }}
                      onClick={() => handleClose(false, 1, comment.id)}
                    >
                      <FaSave size={16} color="#0272C4" /> &nbsp; Unsave
                    </StyledMenuItem>
                  )}
                  <StyledMenuItem onClick={() => handleClose(true, 2, comment.id)}>
                    <MdOutlineModeEditOutline size={16} color="#7c7c7c" />{" "}
                    &nbsp; Edit
                  </StyledMenuItem>
                  <StyledMenuItem id={`buttonDelete${index}`} onClick={() => handleClose(true, 3, comment.id)}>
                    <MdDeleteOutline size={16} color="#7c7c7c" /> &nbsp; Delete
                  </StyledMenuItem>
                </Menu> */}
                {comment.isModerator ? (
                  <>
                    {comment.spam || comment.removed ? (
                      <Button
                        variant="text"
                        onClick={() =>
                          approveButtonClickHandler(true, index, comment.id)
                        }
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
                        onClick={() =>
                          removeButtonClickHandler(true, index, comment.id)
                        }
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
                        onClick={() =>
                          spamButtonClickHandler(true, index, comment.id)
                        }
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
                        onClick={() =>
                          lockButtonClickHandler(true, index, comment.id)
                        }
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
                        onClick={() =>
                          lockButtonClickHandler(false, index, comment.id)
                        }
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
