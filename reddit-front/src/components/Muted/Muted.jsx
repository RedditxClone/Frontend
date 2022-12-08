/* eslint-disable no-unused-vars */
// import React from 'react';
import { Button } from '@mui/material';
import { TbHammer } from 'react-icons/tb';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function Muted() {
  return (
    <div
      className="muted-cont"
      style={{ backgroundColor: '#dae0e6', height: '65rem' }}
    >
      <div
        className="cont-1"
        style={{
          height: '48px',
          margin: '0',
          backgroundColor: '#edeff1',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse'
        }}
      >
        <div
          className="button-cont"
          style={{ width: '100px', marginRight: '17px' }}
        >
          <Button
            style={{
              backgroundColor: '#0079d3',
              color: '#ffffff',
              borderRadius: '50px',
              fontSize: '14px',
              width: '95px',
              textTransform: 'none',
              height: '31px'
            }}
          >
            Mute user
          </Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2 style={{ padding: '10px 0 0px 25px' }}>Muted users</h2>
        <span
          style={{
            marginLeft: '7px',
            fontSize: '22px',
            marginTop: '19px',
            color: '#0079d3'
          }}
        >
          <a
            href="https://mods.reddithelp.com/hc/en-us/articles/360009161872"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineExclamationCircle style={{ cursor: 'pointer' }} />
          </a>
        </span>
      </div>
      <div
        className="muted-user-cont"
        style={{ padding: '10px 25px 0 25px' }}
      >
        <div
          className="muted-users"
          style={{
            backgroundColor: '#ffffff',
            minHeight: '262px',
            borderRadius: '7px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              marginLeft: '40%',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '22px',
              color: '#878a8c'
            }}
          >
            <span>
              <TbHammer
                style={{
                  fontSize: '35px',
                  marginLeft: '94px',
                  marginBottom: '30px'
                }}
              />
            </span>
            <br />
            No muted users in r/eee123
          </span>
        </div>
      </div>
    </div>
  );
}
