import { useState, useEffect } from 'react';
import PostsAndComments from '../CommunitySettings/PostsAndComments';
import { getCommunitySettings, updateCommunitySettings } from '../../services/requests/communitySettings';

// eslint-disable-next-line no-unused-vars
export default function PostsAndCommentsContainer({ SubredditName }) {
  // eslint-disable-next-line no-unused-vars
  const [settings, setSettings] = useState([]);
  const [spoilerButton, setSpoilerButton] = useState({
    clicked: false
  });
  const [imgCommentButton, setImgCommentButton] = useState({
    clicked: false
  });

  const [suggestedSortList, setSuggestedSortList] = useState({
    showList: false,
    buttonName: ' '
  });
  useEffect(() => {
    const fetchSettings = async () => {
      const results = await getCommunitySettings(SubredditName);
      setSettings(results);
      setSpoilerButton(settings.spoilersEnabled);
      setSuggestedSortList({ showList: false, buttonName: settings.suggestedCommentSort });
      setImgCommentButton({ clicked: settings.allowImages });
    };
    fetchSettings();
  }, []);
  const SpoilerButtonHandle = () => {
    setSpoilerButton({ clicked: !spoilerButton.clicked });
  };
  const ImgCommentButtonHandle = () => {
    setImgCommentButton({ clicked: !imgCommentButton.clicked });
  };

  // Buttons Handle
  const ButtonsHandle = (event) => {
    if (event.target.id === 'SpoilerButton') {
      SpoilerButtonHandle();
    } else {
      ImgCommentButtonHandle();
    }
  };
  // Suggested Sort List
  const SuggestedSortListHandle = (event) => {
    if (event.target.id === 'None') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'NONE (RECOMMENDED)'
      });
    } else if (event.target.id === 'Best') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'BEST'
      });
    } else if (event.target.id === 'Old') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'OLD'
      });
    } else if (event.target.id === 'Top') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'TOP'
      });
    } else if (event.target.id === 'QandA') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'Q&A'
      });
    } else if (event.target.id === 'Beta') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'LIVE (BETA)'
      });
    } else if (event.target.id === 'Controversial') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'CONTROVERSIAL'
      });
    } else if (event.target.id === 'New') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'NEW'
      });
    } else {
      setSuggestedSortList({
        showList: !suggestedSortList.showList,
        buttonName: suggestedSortList.buttonName
      });
    }
  };
  const SaveHandle = () => {
    const info = {
      request: {
        spoilersEnabled: spoilerButton.clicked,
        suggestedCommentSort: suggestedSortList.buttonName,
        allowImages: imgCommentButton.clicked
      },
      subredditName: SubredditName
    };
    updateCommunitySettings(info);
  };

  return (
    <PostsAndComments
      SuggestedSortList={suggestedSortList}
      SugListHandle={SuggestedSortListHandle}
      ButHandle={ButtonsHandle}
      Save={SaveHandle}
      Spoiled={spoilerButton.clicked}
      Img={imgCommentButton.clicked}
    />
  );
}
