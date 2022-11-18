// import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import MyProfileCard from '../../components/MyProfileCard/MyProfileCard';

export default function MyProfilePage() {
  const [optionButton, optionButtonState] = useState({
    title: 'More Options',
    showMore: false,
    listItems: []
  });
  const MoreOptionsHandler = () => {
    const showless = !optionButton.showMore;
    optionButtonState({
      title: 'More Options',
      showMore: showless,
      listItems: []
    });
  };
  const FewerOptionsHandler = () => {
    const showmore = !optionButton.showMore;
    optionButtonState({
      title: 'Fewer Options',
      showMore: showmore,
      listItems: [
        'Add Custom Feed',
        'Invite Someone to chat'
      ]
    });
  };
  const buttonHandler = () => {
    if (optionButton.showMore) {
      MoreOptionsHandler();
    } else {
      FewerOptionsHandler();
    }
  };
  return (
    <div style={{ backgroundColor: '#DAE0E6' }}>
      <ProfileNav />
      {/* <Outlet /> */}
      <MyProfileCard
        arr={optionButton.listItems}
        optionsButtonTitle={optionButton.title}
        socialLinksArray={[]}
        click={buttonHandler}
      />
    </div>
  );
}
