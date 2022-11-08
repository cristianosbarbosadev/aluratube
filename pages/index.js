import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
  const estilosDaHomePage = { 
  //  backgroundColor: 'red' 
  };

  console.log(config.playLists);

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <TimeLine playLists={config.playLists} />
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  .user-thumb {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }

  .banner {
    object-fit: cover;
    width: 100%;
    height: 236px;
  }

  .linkedin {
    color: #0077b5;
    font-size: 14px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img className="banner" src={config.banner} />

      <section className="user-info">
        <img
          className="user-thumb"
          src={`https://github.com/${config.github}.png`}
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
          <a
            href="https://www.linkedin.com/in/cristianosantosbarbosa/"
            className="linkedin"
          >
            {config.linkedin}
          </a>
          <a className="linkedin">{config.separador}</a>
          <a
            href="https://github.com/cristianosbarbosadev "
            className="linkedin"
          >
            {config.github}
          </a>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  const playListsNames = Object.keys(props.playLists);
  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      {playListsNames.map(playListsNames => {
        const videos = props.playLists[playListsNames];
        return (
          <section>
            <h2>{playListsNames}</h2>
            <div>
              {videos.map(video => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
