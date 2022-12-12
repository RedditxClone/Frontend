import api from './api';

const communitySettings = async (
  CommunityName,
  CommunityDescription,
  WelcomeMessage,
  IsWelcome,
  TypeOfCommunity,
  isOver18,
  ApprovedUserAbility,
  isAcceptNewPostReq,
  isAcceptReqToJoin
) => {
  try {
    const response = await api.post(
      '/api/subreddit/communitySettings/community',
      {
        communityName: CommunityName,
        communityDescription: CommunityDescription,
        welcomeMessage: WelcomeMessage,
        isWelcome: IsWelcome,
        typeOfCommunity: TypeOfCommunity,
        over18: isOver18,
        approvedUserAbility: ApprovedUserAbility,
        acceptNewPostReq: isAcceptNewPostReq,
        acceptReqToJoin: isAcceptReqToJoin
      }
    );
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default communitySettings;
