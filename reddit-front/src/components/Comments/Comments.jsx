/* eslint-disable no-unused-vars */
import './Comments.style.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import avatarImg from '../../assets/Images/avatar_default_5.png';

export default function Comments() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        paddingLeft: '12px',
        borderRadius: '5px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img
            src={avatarImg}
            style={{ borderRadius: '4px' }}
            alt="avatar"
          />
        </div>
        <p style={{ marginLeft: '10px', fontSize: '13px' }}>karim</p>
        <p
          style={{
            marginLeft: '7px',
            fontSize: '13px',
            color: '#7c7c7c'
          }}
        >
          . 18 hr.ago
        </p>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <div>
          <p style={{ fontSize: '14px', marginLeft: '40px', marginTop: '3px' }}>
            Most people just naming clubs when I think the question was the best
            player of each position
          </p>
          <div
            style={{
              marginLeft: '38px',
              fontSize: '23px',
              color: '#7c7c7c',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <BiUpvote
              className="span-hov"
              style={{ marginRight: '7px', cursor: 'pointer' }}
            />
            <span
              style={{
                fontSize: '14px',
                marginRight: '7px'
              }}
            >
              222
            </span>
            <BiDownvote
              className="span-hov"
              style={{ marginRight: '8px', cursor: 'pointer' }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px',
                marginRight: '7px'
              }}
            >
              <span
                className="span-hov"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px',
                  cursor: 'pointer'
                }}
              >
                <FaRegCommentAlt
                  style={{ fontSize: '22px', marginRight: '6px' }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '-3px'
                  }}
                >
                  Reply
                </span>
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '-5px'
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  marginRight: '8px',
                  padding: '5px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                className="span-hov"
              >
                Give Award
              </span>
              <span
                style={{
                  fontSize: '14px',
                  marginRight: '8px',
                  padding: '5px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                className="span-hov"
              >
                Share
              </span>
              <span
                style={{
                  fontSize: '14px',
                  marginRight: '8px',
                  padding: '5px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                className="span-hov"
              >
                Report
              </span>
              <span
                style={{
                  fontSize: '14px',
                  marginRight: '8px',
                  padding: '5px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
                className="span-hov"
              >
                Save
              </span>
              <span
                style={{
                  fontSize: '14px',
                  marginRight: '8px',
                  padding: '5px',
                  fontWeight: 'bold',
                  marginBottom: '-2px',
                  cursor: 'pointer'
                }}
                className="span-hov"
              >
                Follow
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
