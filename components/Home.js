const Home = ({ dark }) => {
  return (
    <div
      className="orido_tm_hero w-full min-h-[100vh] relative float-left"
      id="home"
    >
      <div className="container min-h-[100vh]">
        <div className="content min-h-[100vh] relative flex items-center justify-between">
          <div className="details w-1/2 pr-[50px]">
            <div className="short mb-[32px]">
              <h3 className="text-[80px] font-medium tracking-[-4px] mb-[11px]">
                M Rizqi Zulfian{" "}
                <img
                  className="svg w-[45px] h-[45px] relative left-[-7px]"
                  src="assets/img/svg/hi.svg"
                  alt
                />
              </h3>
              <span className="job inline-block relative text-[24px] pl-[97px]">
                Frontend Developer
              </span>
            </div>
            <div className="text mb-[70px]">
              <p className="text-[16px] text-[#5A5A5A] leading-[26px] max-w-[400px]">
                I'm Frontend Developer based in Indonesia, and I'm very passionate
                and dedicated to my work.
              </p>
            </div>
            <div className="buttons flex items-center">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="assets/img/svg/send.svg" alt />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="assets/img/svg/top-arrow.svg" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow absolute bottom-[120px] flex items-center">
          <span className="text-[16px] font-medium">Follow me:</span>
          <ul className="flex items-center relative top-[5px] ml-[20px]">
            <li className="mr-[20px]">
              <a
                className="inline-block relative w-[56px] h-[56px] bg-[#F6F6F6] rounded-full transition-all duration-300"
                href="https://www.linkedin.com/in/mrizqizulfian/"
                target="_blank"
              >
                <img
                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                  src="assets/img/svg/social/linkedin.svg"
                  alt
                />
              </a>
            </li>
            <li className="mr-[20px]">
              <a
                className="inline-block relative w-[56px] h-[56px] bg-[#F6F6F6] rounded-full transition-all duration-300"
                href="https://www.hackerrank.com/profile/rizqizulfian"
                target="_blank"
              >
                <img
                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                  src="assets/img/svg/social/hackerrank.svg"
                  alt
                />
              </a>
            </li>
            <li>
              <a
                className="inline-block relative w-[56px] h-[56px] bg-[#F6F6F6] rounded-full transition-all duration-300"
                href="https://www.instagram.com/mrizqizulfian/"
                target="_blank"
              >
                <img
                  className="svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300"
                  src="assets/img/svg/social/instagarm.svg"
                  alt
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="orido_tm_down absolute left-[150px] bottom-[45px]">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`assets/img/svg/${
              dark ? "down_button_light" : "down_button"
            }.svg`}
            alt
          />
        </a>
      </div>
      <div className="avatar absolute w-1/2 right-0 bottom-[-8px]">
        <div className="img relative inline-block">
          <img
            className="max-w-[700px] max-h-[760px]"
            src={`assets/img/hero/${dark ? "2" : "1"}.png`}
            alt
          />
          {/* <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <img
                className="anim_circle"
                src="assets/img/hero/welcome.png"
                alt
              />
              <img className="svg" src="assets/img/svg/play.svg" alt />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
