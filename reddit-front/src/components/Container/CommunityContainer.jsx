import { useEffect, useState } from 'react';
import { getCommunitySettings, updateCommunitySettings } from '../../services/requests/communitySettings';
// eslint-disable-next-line import/no-named-as-default-member
import Community from '../CommunitySettings/Community';

// eslint-disable-next-line no-unused-vars
export default function CommunityContainer({ SubredditName }) {
  const [settings, setSettings] = useState([]);
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
  const [commType, setCommType] = useState('Public');
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
  // Fetching the results by calling the fetch service
  useEffect(() => {
    const fetchSettings = async () => {
      const results = await getCommunitySettings(SubredditName);
      setSettings(results);
      setCommType(results.type);
      const chosed = true;
      if (results.type === 'Private') {
        setCommunityType({
          private: chosed,
          restricted: !chosed,
          public: !chosed
        });
      } else if (results.type === 'Restricted') {
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
      setWelcomeMessageButton({ clicked: results.welcomeMessageEnabled });
      setPlusButton({ clicked: results.over18 });
      setAcceptNewReqButton({ clicked: results.acceptPostingRequests });
      setAcceptToJoinButton({ clicked: results.acceptingRequestsToJoin });
    };
    fetchSettings();
  }, []);

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
    const tmp2 = !welcomeMessageButton.clicked;
    setWelcomeMessageButton({ clicked: tmp2 });
  };
  const CommunityTypeHandler = (event) => {
    const chosed = true;
    if (event.target.id === 'Private') {
      setCommType('Private');
      setCommunityType({
        private: chosed,
        restricted: !chosed,
        public: !chosed
      });
    } else if (event.target.id === 'Restricted') {
      setCommType('Restricted');
      setCommunityType({
        private: !chosed,
        restricted: chosed,
        public: !chosed
      });
    } else {
      setCommType('Private');
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
  const PlusButtonHandle = () => {
    const tmp = !plusButton.clicked;
    setPlusButton({ clicked: tmp });
  };
  const AcceptNewReqButtonHandle = () => {
    const tmp = !acceptNewReqButton.clicked;
    setAcceptNewReqButton({ clicked: tmp });
  };
  const AcceptToJoinButtonHandle = () => {
    const tmp = !acceptToJoinButton.clicked;
    setAcceptToJoinButton({ clicked: tmp });
  };

  const ButtonsHandle = (event) => {
    if (event.target.id === 'WelcomeMessageButton') {
      console.log(welcomeMessageButton.clicked);
      HandleCommmunityWelcomMessagebutton();
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
  const SaveHandle = () => {
    const nam = document.getElementById('InputName').value;
    const des = document.getElementById('InputDescription').value;
    const wel = document.getElementById('InputWel').value;
    const info = {
      request: {
        name: nam,
        type: commType,
        description: des,
        welcomeMessageText: wel,
        welcomeMessageEnabled: welcomeMessageButton.clicked,
        over18: plusButton.clicked,
        acceptPostingRequests: acceptNewReqButton.clicked,
        acceptingRequestsToJoin: acceptToJoinButton.clicked
      },
      subredditName: SubredditName
    };
    updateCommunitySettings(info);
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
      Name={settings.name}
      Description={settings.description}
      WelcomMes={settings.welcomeMessageEnabled}
      Over={plusButton.clicked}
      WelEnable={welcomeMessageButton.clicked}
      AccPostReq={acceptNewReqButton.clicked}
      AccReqtoJoin={acceptToJoinButton.clicked}
      Save={SaveHandle}
    />
  );
}
