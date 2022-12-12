/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { BsFillCaretDownFill } from 'react-icons/bs';
import { PostsAndCommentsDiv } from './PostsAndComments.style';
import { IOSSwitch } from './Community.style';

export default function PostsAndComments({ SuggestedSortList, SugListHandle }) {
  return (
    <PostsAndCommentsDiv>
      <h1>Post and Comment settings</h1>
      <h3>POSTS</h3>
      {/* Posts typ option
      <div style={{display: 'flex'}}>
            <h2 style={{margin:'0'}}>Post type options</h2>
            <div style={{marginBottom:'0',display: 'flex',flexGrow:'1', justifyContent: 'flex-end'}}>
              <div style={{margin:'0',position: 'relative'}}>
                <button onClick={PosListHandle} style={{margin:'0'}}>ANY <BsFillCaretDownFill style={{marginLeft:'6px'}}/></button>
                 {/* {PosTypeList.showList&&(
                 <ul id="Menu">
                  <li onClick={PosListHandle} id="Any">Any</li>
                  <li onClick={PosListHandle} id="LinksOnly">Links Only</li>
                  <li onClick={PosListHandle} id="TextPostsOnly">Text Posts Only</li>
                 </ul>)}

                <p onClick={PosListHandle} style={{margin:'0'}}></p>
              </div>
            </div>
          </div> */}
      {/* allow cross posting of posts */}
      {/* <div style={{display: 'flex', alignItems: 'center'}}>
            <h2 style={{margin:'0'}}>Allow crossposting of posts.</h2>
            <div style={{marginBottom:'0', display: 'flex',flexGrow:'1', justifyContent: 'flex-end'}}>
          <IOSSwitch />
          </div>
          </div> */}
      {/* Enable spoiler tagS */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ margin: '0' }}>
          <h2 style={{ margin: '0' }}>
            Enable spoiler tagS
            {' '}
            <span id="SpoilerFlair">SPOILER</span>
          </h2>
          <p style={{ margin: '0' }}>Media on posts with the spoiler tag are blurred</p>
        </div>
        <div style={{
          marginBottom: '0', display: 'flex', flexGrow: '1', justifyContent: 'flex-end'
        }}
        >
          <IOSSwitch />
        </div>
      </div>
      {/* comments */}
      <h3>COMMENTS</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '0' }}>
          <h2 style={{ margin: '0' }}>Suggested sort</h2>
          <p style={{ margin: '0' }}>All comment feeds in community will default to this sort setting</p>
        </div>

        <div style={{
          marginBottom: '0', display: 'flex', flexGrow: '1', justifyContent: 'flex-end'
        }}
        >
          <div style={{ margin: '0', position: 'relative' }}>
            <button onClick={SugListHandle} style={{ margin: '0' }}>
              {SuggestedSortList.buttonName}
              {' '}
              <BsFillCaretDownFill style={{ marginLeft: '6px' }} />
            </button>
            {SuggestedSortList.showList && (
              <ul id="Menu" style={{ width: '18rem' }}>
                <li onClick={SugListHandle} id="None">None(Recommended)</li>
                <li onClick={SugListHandle} id="Best">Best</li>
                <li onClick={SugListHandle} id="Old">Old</li>
                <li onClick={SugListHandle} id="Top">TOP</li>
                <li onClick={SugListHandle} id="QandA">Q&A</li>
                <li onClick={SugListHandle} id="Beta">Live (Beta)</li>
                <li onClick={SugListHandle} id="Controversial">Controversial</li>
                <li onClick={SugListHandle} id="New">New</li>
              </ul>
            )}

          </div>
        </div>
      </div>
      {/* Media in comments */}
      <div><h2>Media in comments</h2></div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 0 0 3.4rem' }}>
        <div style={{ margin: '0' }}>
          <h2 style={{ margin: '0' }}>Images</h2>
          <p style={{ margin: '0' }}>Allow comments with uploaded images.</p>
        </div>
        <div style={{
          marginBottom: '0', display: 'flex', flexGrow: '1', justifyContent: 'flex-end'
        }}
        >
          <IOSSwitch />
        </div>
      </div>
      {/* comments */}

    </PostsAndCommentsDiv>
  );
}
