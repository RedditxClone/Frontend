import { useState } from 'react';
// eslint-disable-next-line import/no-named-as-default-member
import Community from '../CommunitySettings/Community';

export default function CommunityContainer() {
  const [communityName, setCommunityName] = useState({
    name: '',
    count: 100,
    valid: true
  });
  const [communityMessage, setCommunityMessage] = useState({
    message: '',
    count: 500,
    valid: true
  });
  const [communityWelcom, setCommunityWelcom] = useState({
    name: '',
    count: 5000,
    valid: true
  });
  const [showWelcom, setShowWelcom] = useState(false);
  const [welcomeMessageButton, setWelcomeMessageButton] = useState({
    clicked: false
  });
  const [plusButton, setPlusButton] = useState({
    clicked: false
  });
  const [acceptNewReqButton, setAcceptNewReqButton] = useState({
    clicked: false
  });
  const [acceptToJoinButton, setAcceptToJoinButton] = useState({
    clicked: false
  });
  const [communityType, setCommunityType] = useState({
    private: false,
    restricted: false,
    public: true
  });
  const [restrictedList, setRestrictedList] = useState({
    showList: false,
    buttonName: 'POST ONLY (DEFAULT)',
    paragraphBelow: 'Only approved users can post. Anyone can comment.'
  });
  const HandleCommmunityName = (event) => {
    let num = 0;
    if (event.target.value.trim() === '') {
      setCommunityName({ count: 100, valid: false });
    } else if (event.target.value.length < 100) {
      num = 100 - event.target.value.length;
      setCommunityName({ count: num, valid: true });
    } else {
      setCommunityName({ count: num, valid: false });
    }
  };
  const HandleCommmunityMessage = (event) => {
    let num2 = 0;
    if (event.target.value.trim() === '') {
      setCommunityMessage({ count: 500, valid: false });
    } else if (event.target.value.length < 500) {
      num2 = 500 - event.target.value.length;
      setCommunityMessage({ count: num2, valid: true });
    } else {
      setCommunityMessage({ count: num2, valid: false });
    }
  };
  const HandleCommmunityWelcomMessage = (event) => {
    let num2 = 0;
    if (event.target.value.trim() === '') {
      setCommunityWelcom({ count: 5000, valid: false });
    } else if (event.target.value.length < 5000) {
      num2 = 5000 - event.target.value.length;
      setCommunityWelcom({ count: num2, valid: true });
    } else {
      setCommunityWelcom({ count: num2, valid: false });
    }
  };
  const HandleCommmunityWelcomMessagebutton = () => {
    const temp = !showWelcom;
    setShowWelcom(temp);
  };
  const CommunityTypeHandler = (event) => {
    const chosed = true;
    if (event.target.id === 'Private') {
      setCommunityType({
        private: chosed,
        restricted: !chosed,
        public: !chosed
      });
    } else if (event.target.id === 'Restricted') {
      setCommunityType({
        private: !chosed,
        restricted: chosed,
        public: !chosed
      });
    } else {
      setCommunityType({
        private: !chosed,
        restricted: !chosed,
        public: chosed
      });
    }
  };
  const RestrictedListHandle = (event) => {
    if (event.target.id === 'PostOnly') {
      setRestrictedList({
        showList: false,
        buttonName: 'POST ONLY (DEFAULT)',
        paragraphBelow: 'Only approved users can post. Anyone can comment.'
      });
    } else if (event.target.id === 'CommentOnly') {
      setRestrictedList({
        showList: false,
        buttonName: 'COMMENT ONLY',
        paragraphBelow: 'Only approved users can comment. Anyone can post.'
      });
    } else if (event.target.id === 'PostComment') {
      setRestrictedList({
        showList: false,
        buttonName: 'POST & COMMENT',
        paragraphBelow: 'Only approved users can post and comment.'
      });
    } else {
      setRestrictedList({
        showList: !restrictedList.showList,
        buttonName: restrictedList.buttonName,
        paragraphBelow: restrictedList.paragraphBelow
      });
    }
  };

  //  buttons handle
  const WelcomeMessageButtonHandle = () => {
    setWelcomeMessageButton({ clicked: !welcomeMessageButton.clicked });
  };
  const PlusButtonHandle = () => {
    setPlusButton({ clicked: !plusButton.clicked });
  };
  const AcceptNewReqButtonHandle = () => {
    setAcceptNewReqButton({ clicked: !acceptNewReqButton.clicked });
  };
  const AcceptToJoinButtonHandle = () => {
    setAcceptToJoinButton({ clicked: !acceptToJoinButton.clicked });
  };

  const SpoilerButtonHandle = () => {
    setSpoilerButton({ clicked: !spoilerButton.clicked });
  };
  const ImgCommentButtonHandle = () => {
    setImgCommentButton({ clicked: !imgCommentButton.clicked });
  };

  const ButtonsHandle = (event) => {
    if (event.target.id === 'WelcomeMessageButton') {
      console.log(welcomeMessageButton.clicked);
      WelcomeMessageButtonHandle();
      console.log(welcomeMessageButton.clicked);
    } else if (event.target.id === 'PlusButton') {
      PlusButtonHandle();
    } else if (event.target.id === 'AcceptNewReqButton') {
      AcceptNewReqButtonHandle();
    } else if (event.target.id === 'AcceptToJoinButton') {
      AcceptToJoinButtonHandle();
    } else if (event.target.id === 'SpoilerButton') {
      SpoilerButtonHandle();
    } else {
      ImgCommentButtonHandle();
    }
  };
  return (
    <Community
      CommunityName={communityName}
      NameHandle={HandleCommmunityName}
      CommunityMessage={communityMessage}
      MessageHandle={HandleCommmunityMessage}
      TypeHandle={CommunityTypeHandler}
      CommunityType={communityType}
      RestrictedList={restrictedList}
      ResListHandle={RestrictedListHandle}
      ButHandle={ButtonsHandle}
      WelHandle={HandleCommmunityWelcomMessage}
      CommunityWelcom={communityWelcom}
      ShowWelcom={showWelcom}
      WelHandleButton={HandleCommmunityWelcomMessagebutton}
    />
  );
}
