import React from 'react'
import ProfileAnimation from '../ProfileAnimation'
import { InfoContainer, InfoBg, InfoLeft, Img, InfoRight, InfoInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './Info'
import Profile from '../../Images/myprofile.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <InfoContainer>
                <InfoBg>
                    <ProfileAnimation />
                </InfoBg>
                <InfoInnerContainer >
                    <InfoLeft id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </InfoLeft>

                    <InfoRight id="Right">

                        <Img src={Profile} alt="info-image" />
                    </InfoRight>
                </InfoInnerContainer>

            </InfoContainer>
        </div>
    )
}

export default HeroSection