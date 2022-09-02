import React from 'react';
import styled from '@emotion/styled';

interface ProfileSkillListProps {
    title: string;
    skillList: string[];
    color: string;
}

export const ProfileSkillList: React.FC<ProfileSkillListProps> = ({ title, skillList, color }) => {
    const Item = styled.div`
        font-weight: 300;
        font-size: 1.2rem;
        color: white;
        background: ${color};
        border-radius: 10px;
        padding: 0.5rem 0;
        margin: 0.4rem 0;
    `;
    return (
    <Wrapper>
        <Title>{title}</Title>
        {skillList.map((obj) => {
            return <Item>{obj}</Item>
        })}
    </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 15rem;
`;

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
`;

