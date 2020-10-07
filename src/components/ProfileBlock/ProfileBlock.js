import React from 'react';
import { useUser } from '../../hooks/useUser';
import Block from '../Block/Block';

import './_profile_block.scss';

function ProfileBlock() {
    const { username } = useUser() || { username: 'ads' };

    const getInitials = username.split('').map((letter, index) => {
        if (index < 2) {
            return letter;
        }
        return null;
    }).filter(item => item != null).join('').toUpperCase();

    const ProfileTitle = () => <><span className="profile-block__title"><span className="profile-block__initials">{getInitials}</span> {username}</span></>;

    return (
        <Block renderTitle={<ProfileTitle />}>
            <p>block content</p>
        </Block>
    );
}

export default ProfileBlock;
