/* eslint-disable */
import CommentsForSamePostCard from "../CommentsCard/CommentsCard";
import { getComments } from "../../services/requests/Comment";
import { useState,useEffect } from "react";
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
export default function CommentTap() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await getComments();
      console.log(`results: ${results}`);
      setComments(results);
    };
    fetchData();
  }, []);

  return (
    // <>
    //{
      comments.map((comment, index) => (
      <div key={index} style={{ margin: "4px" }}>
        <CommentsForSamePostCard
          postCommentInfo={comment.postCommentInfo}
          commentsForSamePost={comment.commentsForSamePost}
        />
      </div>
      ))
// }
    //   {deleteModalShow ? (
    //     <div style={style2}>
    //       <div
    //         style={{
    //           display: "flex",
    //           alignItems: "flex-start",
    //           flexDirection: "column"
    //         }}
    //       >
    //         <div
    //           style={{
    //             borderBottom: "1px solid #EDEFF1",
    //             width: "100%",
    //             textAlign: "left",
    //             padding: "15px 8px 15px 15px",
    //             display: "flex",
    //             justifyContent: "space-between"
    //           }}
    //         >
    //           <Typography
    //             varient="h2"
    //             sx={{ fontSize: "16px", fontWeight: "500" }}
    //           >
    //             Delete Comment
    //           </Typography>
    //           <MdClose size={24} color="#7c7c7c" />
    //         </div>
    //         <div style={{ padding: "20px 8px 20px 15px" }}>
    //           <Typography
    //             varient="h6"
    //             sx={{ fontSize: "14px", fontWeight: "500" }}
    //           >
    //             Are you sure you want to delete your comment ?
    //           </Typography>
    //         </div>
    //         <div
    //           style={{
    //             width: "100%",
    //             backgroundColor: "#Edeff1",
    //             display: "flex",
    //             justifyContent: "end"
    //           }}
    //         >
    //           <div
    //             style={{
    //               // alignSelf: "flex-end",
    //               padding: "6px",
    //               backgroundColor: "#Edeff1",
    //               padding: "1rem"
    //             }}
    //           >
    //             <RoundedButton
    //               sx={{
    //                 marginLeft: "3rem",
    //                 fontSize: "1.6rem",
    //                 padding: "2px 20px",
    //                 margin: "0 0.4rem 0.4rem 0",
    //                 maxWidth: "95px"
    //               }}
    //               variant="outlined"
    //               disableElevation
    //             >
    //               Keep
    //             </RoundedButton>
    //             <RoundedButton
    //               sx={{
    //                 marginLeft: "3rem",
    //                 fontSize: "1.6rem",
    //                 padding: "2px 20px",
    //                 ":hover": {
    //                   backgroundColor: "#1484D6"
    //                 },
    //                 margin: "0 0.4rem 0.4rem 0"
    //               }}
    //               variant="contained"
    //               disableElevation
    //               type="submit"
    //             >
    //               Delete
    //             </RoundedButton>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ) : null}
    // </>
  );
}
