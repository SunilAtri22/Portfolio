import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Myprojects = ({ openModal, setOpenModal }) => {
  const categoryToShow = 'web app';

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have used various front end technologies and skills to design and develop a wide range of projects.
        </Desc>
        <CardContainer>
          {projects
            .filter((item) => item.category === categoryToShow)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Myprojects;
