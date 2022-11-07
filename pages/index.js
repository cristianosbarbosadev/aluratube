import config from '../confi.json';
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
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* {<img src="banner" alt="" />} */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
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
        console.log(playListsNames);
        console.log(videos);
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
