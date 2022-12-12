/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { IoPerson } from 'react-icons/io5';
import { HiEye, HiLockClosed } from 'react-icons/hi';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { BsBoxArrowUpRight, BsFillCaretDownFill } from 'react-icons/bs';
import { CommunityDiv, Down, IOSSwitch } from './Community.style';

export default function Community({
  CommunityName,
  NameHandle,
  CommunityMessage,
  MessageHandle,
  TypeHandle,
  CommunityType,
  RestrictedList,
  ResListHandle
}) {
  const npClasses = [];
  if (!CommunityName.valid) {
    npClasses.push('red');
  }
  const mpClasses = [];
  if (!CommunityMessage.valid) {
    mpClasses.push('red');
  }

  return (
    <CommunityDiv>
      <h1>Community Settings</h1>
      <h3>COMMUNITY PROFILE</h3>
      <div id="CommunityName">
        <h2>Community name</h2>
        <input
          type="text"
          maxLength={100}
          onChange={NameHandle}
        />
        <p className={npClasses}>
          {CommunityName.count}
          Characters remaining
        </p>
      </div>
      <div id="CommunityTopics">
        <h2>Community topics</h2>
        <p>
          <span>
            This will help Reddit recommend your community to relevant users and
            other discovery experiences.
          </span>
          <a style={{ textDecoration: 'none' }} href="https://mods.reddithelp.com/hc/en-us/articles/360024518712">
            Learn more.
          </a>
          <span style={{ marginLeft: '5rem' }}>0/25</span>
        </p>
        <button type="submit" id="FirstButton">
          <span> Add a Primary Topic</span>
          <Down />
        </button>
      </div>

      <div id="CommunityDescription">
        <h2>Community description</h2>
        <p>This is how new members come to understand your community.</p>
        <textarea
          maxLength={500}
          rows="3"
          onChange={MessageHandle}
        />
        <p className={mpClasses}>
          {CommunityMessage.count}
          Characters remaining
        </p>
      </div>
      <div
        id="WelcomeMessage"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ marginBottom: '0' }}>
          <h2>
            <label htmlFor="WelcomeMessageButton">
              Send welcome message to new members
            </label>
          </h2>
          <p>
            Create a custom welcome message to greet people the instant they
            join your community. New community members
            {' '}
            <br />
            will see this in a direct message 1 hour after joining.
            <a href="https://mods.reddithelp.com/hc/en-us/articles/360002551551-Welcoming-new-members">
              Learn more.
            </a>
            {' '}
          </p>
        </div>
        <div
          style={{
            marginBottom: '0',
            display: 'flex',
            flexGrow: '1',
            justifyContent: 'flex-end'
          }}
        >
          <IOSSwitch id="WelcomeMessageButton" />
        </div>
      </div>
      <h3>COMMUNITY LOCATION AND MAIN LANGUAGE</h3>
      <p>
        Adding a location helps your community show up in search results and
        recommendations and helps local redditors find it easier.
      </p>
      <div id="Language">
        <h2>Language</h2>
        <select
          name="language"
          style={{ maxLength: '200px', width: '100%', height: '3rem' }}
        >
          <option value="other">Other</option>
          <option value="africaans">Africaans</option>
          <option value="Deutsch">Deutsch</option>
          <option value="English (US)">English (US)</option>
          <option value="Español (ES)">Español (España)</option>
          <option value="Español (MX)">Español (Latinoamerca)</option>
          <option value="Français">Français</option>
          <option value="Italiano">Italiano</option>
          <option value="Português (BR)">Português (BR)</option>
          <option value="Português (PT)">Português (PT)</option>
        </select>
      </div>
      <div id="Region">
        <h2>Region</h2>
        <input
          type="text"
          placeholder="Add location"
          style={{ width: '98%', height: '2rem', padding: '8px' }}
        />
      </div>
      <h3>COMMUNITY TYPE</h3>
      <ul
        id="TypeOfCommunity"
        style={{ padding: '0', marginBottom: '3.4rem' }}
      >
        <h2>Type of Community</h2>
        <li>
          <input
            type="radio"
            name="typeOfCommunity"
            value="public"
            id="Public"
            onChange={TypeHandle}
          />
          <label htmlFor="Public">
            <h2>
              {' '}
              <IoPerson style={{ margin: '0 8px' }} />
              {' '}
              Public
            </h2>
            <p>Anyone can view, post, and comment to this community</p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="typeOfCommunity"
            value="restricted"
            id="Restricted"
            onChange={TypeHandle}
          />
          <label htmlFor="Restricted">
            <h2>
              {' '}
              <HiEye style={{ margin: '0 8px' }} />
              {' '}
              Restricted
            </h2>
            <p>
              Anyone can view this community, but only approved users can post
            </p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="typeOfCommunity"
            value="private"
            id="Private"
            onChange={TypeHandle}
          />
          <label htmlFor="Private">
            <h2>
              {' '}
              <HiLockClosed style={{ margin: '0 8px' }} />
              {' '}
              Private
            </h2>
            <p>Only approved users can view and submit to this community</p>
          </label>
        </li>
      </ul>
      <div
        id="PlusEighteen"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ marginBottom: '0' }}>
          <h2>
            18+ year old community
            {' '}
            <span id="NsfwFlair">NSFW</span>
          </h2>
          <p>
            When your community is marked as an 18+ community, users must be
            flagged as 18+ in their user settings
          </p>
        </div>
        <div
          style={{
            marginBottom: '0',
            display: 'flex',
            flexGrow: '1',
            justifyContent: 'flex-end'
          }}
        >
          <IOSSwitch />
        </div>
      </div>
      {/* restrictedCommunity */}
      {CommunityType.restricted && (
        <div id="RestrictedCommunity">
          <h3>RESTRICTED COMMUNITY SETTINGS</h3>
          <div style={{ display: 'flex' }}>
            <h2 style={{ margin: '0' }}>Approved users have the ability to</h2>
            <div
              style={{
                marginBottom: '0',
                display: 'flex',
                flexGrow: '1',
                justifyContent: 'flex-end'
              }}
            >
              <div style={{ margin: '0', position: 'relative' }}>
                <button
                  type="submit"
                  onClick={ResListHandle}
                  style={{ margin: '0' }}
                >
                  {RestrictedList.buttonName}
                  {' '}
                  <BsFillCaretDownFill style={{ marginLeft: '6px' }} />
                </button>
                {RestrictedList.showList && (
                  <ul id="Menu">
                    <li
                      onClick={ResListHandle}
                      id="PostOnly"
                    >
                      Post Only (Default)
                    </li>
                    <li
                      onClick={ResListHandle}
                      id="CommentOnly"
                    >
                      Comment Only
                    </li>
                    <li
                      onClick={ResListHandle}
                      id="PostComment"
                    >
                      Post & Comment
                    </li>
                  </ul>
                )}
                <p
                  onClick={ResListHandle}
                  style={{ margin: '0' }}
                >
                  {RestrictedList.paragraphBelow}
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ margin: '0' }}>Accepting new requests to post</h2>
            <div
              style={{
                marginBottom: '0',
                display: 'flex',
                flexGrow: '1',
                justifyContent: 'flex-end'
              }}
            >
              <IOSSwitch />
            </div>
          </div>
        </div>
      )}

      {/* privateCommunity */}
      {CommunityType.private && (
        <div id="PrivateCommunity">
          <h3>PRIVATE COMMUNITY SETTINGS</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ margin: '0' }}>
              <h2 style={{ margin: '0' }}>Accepting requests to join</h2>
              <p style={{ margin: '0' }}>
                Display a button on your private subreddit that allows users to
                request to join. Users may
                {' '}
                <br />
                still send your subreddit modmail whether this is on or off.
              </p>
            </div>

            <div
              style={{
                marginBottom: '0',
                display: 'flex',
                flexGrow: '1',
                justifyContent: 'flex-end'
              }}
            >
              <IOSSwitch />
            </div>
          </div>
        </div>
      )}

      {/* advancidSettings */}
      <h3>ADVANCED SETTINGS</h3>
      <div
        id="Advancedsettings"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div>
          <a
            href="https://old.reddit.com/r/test_for_cufe_univers/about/edit"
            className="Settings"
          >
            Settings for old site
            {' '}
            <BsBoxArrowUpRight style={{ marginLeft: '6px' }} />
          </a>
          <p>
            To change settings that influence the old site, you must go to the
            old settings page
          </p>
        </div>
        <div
          style={{
            marginBottom: '0',
            display: 'flex',
            flexGrow: '1',
            justifyContent: 'flex-end'
          }}
        >
          <a
            href="https://old.reddit.com/r/test_for_cufe_univers/about/edit"
            className="Settings"
          >
            {' '}
            <IoMdArrowRoundForward />
          </a>
        </div>
      </div>
    </CommunityDiv>
  );
}
