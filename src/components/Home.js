import myImg from "../myImg.jpg"; // src 폴더 아래 바로 있는 경우

function Home() {
  return (
    <section className="home">
      <div className="home-img">
        <img src={myImg} alt="My img"></img>
      </div>
      <div className="home-content">
        <h1>
          안녕하세요,
          <div>
            <span>개발자</span> 오창은입니다.
          </div>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}

export default Home;
