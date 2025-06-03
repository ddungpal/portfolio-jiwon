import React, { useState, useEffect } from "react";
// import Avatar from "../components/Avatar";
import Topbar from "../components/Topbar";
// import profileimg from "../imgs/about/profile.png";
// import { useLanguageMode } from "../context/LanguageContext";
// import singleBtn from "../imgs/about/single.png";
// import teamBtn from "../imgs/about/team.png";
// import selectBtn from "../imgs/about/select.png";
import { useQuery } from "@tanstack/react-query";
import { getInterview } from "../api/firebase";
import { Link } from "react-router-dom";
// import Axios from "axios";

// Notion
// notion 테마 스타일링 (필수)
import "react-notion-x/src/styles.css";
// 코드 하이라이트 스타일용 (선택)
import "prismjs/themes/prism-tomorrow.css";
// 공식등 수학적 기호 스타일용 (선택)
import "katex/dist/katex.min.css";

// import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion";
// const notion = new NotionAPI();
// const recordMap = await notion.getPage("CV-1cb09f3526028092ae90f367dcac629b");

export default function About() {
  // const { koMode, toggleKoMode } = useLanguageMode();
  // const [isSingeBtnHover, setIsSingleBtnHover] = useState(false);
  // const [isTeamBtnHover, setIsTeamBtnHover] = useState(false);
  // const [part, setPart] = useState("Single");
  const [category, setCategory] = useState("statement");
  const {
    isLoading,
    error,
    data: interviewImg,
  } = useQuery(["interviewImg"], getInterview);

  const [response, setResponse] = useState({}); //notion
  useEffect(() => {
    const NOTION_PAGE_ID = "CV-1cb09f3526028092ae90f367dcac629b";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  // return (
  //   <div className="About">
  //     <NotionRenderer
  //       // blockMap={staticResponse}
  //       blockMap={response}
  //       fullPage={true}
  //     />
  //   </div>
  // );

  if (category === "statement") {
    return (
      <>
        <Topbar />
        <div className="container mx-auto mt-8 font-bold text-slate-900 text-lg lg:text-xl px-2 lg:px-1">
          <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "statement"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "statement")}
          >
            Statement
          </button>
          {/* <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "interview"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "interview")}
          >
            Interview
          </button> */}
          <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "Painting"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "cv")}
          >
            CV
          </button>
        </div>
        <div className="container mx-auto px-5 lg:px-1">
          <div className="mt-10">
            <p className="mb-3 mt-5 text-xl font-bold">Inspiration</p>
            <p className="line-clamp text-justify">
              I am a person who is naturally excited by shapeless strokes. I
              imagine abstract things as a sort of introduction to exploring
              unknown and nebulous possibilities. Specifically, I'm curious
              about the value of the undefinable. Rather than striving for
              verbal definitions, I prefer to create circumstances with enough
              space and distance that allow the mind to wander; I believe that
              an excess of space can lead us to meet our inner selves. When
              gazing upon our inner selves, we can start to recognize foreign,
              alien environments that we've never been. I practice this
              "shapeless" approach in my life constantly. Erasing borders and
              describing poetic fancies with drawings and paintings is always my
              fundamental and final itinerary.
            </p>
            <p className="mb-3 mt-5 text-xl font-bold">Collaboration</p>
            <p className="line-clamp text-justify">
              Another way of facing the inner self is being together in
              tranquil, cooled moods. I believe collisions with strangers based
              on respect give birth to a more public sense of value. Through
              collaboration and thoughtful criticism with people who work in
              other mediums—whether fashion, traditional music, artificial
              intelligence, among others—we can find that knowledge can be
              sufficiently dissolved into a general, holistic existence. We can
              also redefine it on a relative aspect from each point of view. I
              expect that by distinguishing the things we encounter based on
              these collisions and criticisms will give us a warm, firm
              intuition for public worth. This is what I dreamed of: the way in
              which a private conversation about an inner thought is creatively
              absorbed and set free in the world.
            </p>
            <p className="mb-3 mt-5 text-xl font-bold">Gazing</p>
            <p className="line-clamp text-justify">
              Personally, most of my inspiration is from the times I gazed at
              somethings: a scene I encountered, an event I participated in, a
              relationship with others. I observe these with an eager curiosity
              and give myself enough time to relate with them. I also intimate
              conversations when I feel drawn or associated with any other
              stranger, even if just in my imagination. I gaze honestly,
              genuinely, and openly and freely wait, leaving space to welcome
              thoughts or ideas.
            </p>
            <p className="mb-3 mt-5 text-xl font-bold">Penetration</p>
            <p className="line-clamp text-justify">
              Facing an empty, white paper when I paint drives my implicit
              emotions. These occur briefly in a strong intuition that stems
              from a gazing experience. I applied it to a three-dimensional
              space I imagined, expressed as interdisciplinary art that crosses
              mediums. In the process, impromptu imagery becomes substituted for
              a design for human experience. By planning the experience in the
              exhibition space, a concept is being divided in the aspect of
              detailed space-time. Specifically, I focused on making 'Intended
              Contingency' which can lead people to feel sympathy naturally. I
              hope this sympathy will be a motive that can penetrate people's
              initial natures in the end.
            </p>
          </div>
        </div>
      </>
    );
  } else if (category === "cv") {
    return (
      <>
        <Topbar />
        <div className="container mx-auto mt-8 font-bold text-slate-900 text-lg lg:text-xl px-2 lg:px-1">
          <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "statement"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "statement")}
          >
            Statement
          </button>
          {/* <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "interview"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "interview")}
          >
            Interview
          </button> */}
          <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "cv" ? " text-indigo-300 scale-100" : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "cv")}
          >
            CV
          </button>
        </div>
        <div className="container mx-auto px-5 lg:px-1 flex justify-between mt-10">
          <div className="About">
            <NotionRenderer
              // blockMap={staticResponse}
              blockMap={response}
              fullPage={true}
              disableHeader={true}
            />
          </div>
          {/* <NotionRenderer recordMap={recordMap} fullPage={true} /> */}
          {/* <NotionRenderer blockMap={response} fullPage={true} />; */}
          {/* <div>
            <button
              onMouseOver={() => setIsSingleBtnHover(true)}
              onMouseOut={() => setIsSingleBtnHover(false)}
              onClick={() => setPart((part) => "Single")}
            >
              <img
                src={isSingeBtnHover ? selectBtn : singleBtn}
                alt="metamask"
                className="h-8 w-8"
              />
            </button>
            <button
              onMouseOver={() => setIsTeamBtnHover(true)}
              onMouseOut={() => setIsTeamBtnHover(false)}
              onClick={() => setPart((part) => "Team")}
            >
              <img
                src={isTeamBtnHover ? selectBtn : teamBtn}
                alt="metamask"
                className="h-8 w-8"
              />
            </button>
          </div>
          <div>
            <button onClick={() => toggleKoMode()}>
              {koMode ? (
                <h1 className="font-bold hover:text-indigo-300">En</h1>
              ) : (
                <h1 className="font-bold hover:text-indigo-300">Ko</h1>
              )}
            </button>
          </div> */}
        </div>
      </>
    );
  } else if (category === "interview") {
    let image1 = "";
    let image2 = "";
    let image3 = "";
    let image4 = "";
    let image5 = "";
    let image6 = "";
    let image7 = "";
    let image8 = "";
    let image9 = "";

    console.log(interviewImg);
    if (interviewImg) {
      const _ = require("lodash");
      const interviewImgOri = _.cloneDeep(interviewImg);
      const image1Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "15c18304-7dfb-408d-a2b1-30a02ec69441"
        );
      image1 = image1Obj[0].image;
      const image2Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "11e45829-b9a0-4731-a7d5-b55094fa261d"
        );
      image2 = image2Obj[0].image;
      const image3Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "8929186e-2f4e-4134-8dda-9c6b293a3141"
        );
      image3 = image3Obj[0].image;
      const image4Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "c096022d-2e20-4ac7-8496-f4ef5c0ea983"
        );
      image4 = image4Obj[0].image;
      const image5Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "8ae71efd-c609-45e4-997a-f4e2db5aa896"
        );
      image5 = image5Obj[0].image;
      const image6Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "ec35c708-b39e-4375-b0e0-8a46fc4fd231"
        );
      image6 = image6Obj[0].image;
      const image7Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "92bef10b-49f8-4562-b942-3daf4d1b030d"
        );
      image7 = image7Obj[0].image;
      const image8Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "24eba729-8322-4e4b-8131-7f7bfe2ee2ab"
        );
      image8 = image8Obj[0].image;
      const image9Obj =
        interviewImgOri &&
        interviewImgOri.filter(
          (interview) => interview.id === "e069810f-5050-4087-bd06-f8a0697408e2"
        );
      image9 = image9Obj[0].image;
    } else {
      console.log("데이터를 받아오지 못했습니다.");
    }
    return (
      <>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Topbar />
        <div className="container mx-auto mt-8 font-bold text-slate-900 text-lg lg:text-xl px-2 lg:px-1">
          <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "statement"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "statement")}
          >
            Statement
          </button>
          {/* <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "interview"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "interview")}
          >
            Interview
          </button> */}
          <button
            className={
              "mr-3 hover:text-indigo-300" +
              (category === "Painting"
                ? " text-indigo-300 scale-100"
                : " scale-90")
            }
            type="button"
            onClick={() => setCategory((category) => "cv")}
          >
            CV
          </button>
        </div>
        <div className="container mx-auto px-5 lg:px-1">
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold text-xl">Inner Alignment</p>
            <p className="line-clamp text-justify">
              🎨 Choi Ji Won(@ppingagain) is a visual artist who works in
              drawing, painting, and multidisciplinary arts. Her work may seem
              simple and empty, but there's an energy and rhythm about to flow
              somewhere. Her artworks quietly seep in your mind and lingers.
            </p>
            <hr className="border-2 mt-5 mb-5" />
            <p className="line-clamp text-justify italic">
              “I want to show work that speaks strongly without being loud.”
              -Choi Ji Won-
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-2" src={image1} alt="1.jpg" />
            <p className="text-gray-400">'A Co-worker'</p>
          </div>
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold">
              What has been your most memorable project recently?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              This year, there was “The Preview Seung-su”. Last year, my
              ‘AHACollective(@ahacollective.kr)’ teammates and the percussion
              group ‘Our Percussion’ did a project “0-Phase-1”, which was a
              multidisciplinary art project that set a time and space between 0
              and 1, and expressed the interaction of media and performance
              through sound and light. And 'Spanning' was displayed on the
              digital signage of The Hyundai Seoul.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="https://www.youtube.com/watch?v=9Q3qdXMEZ88"
              target="_blank"
            >
              ♾️{" "}
              <span className="text-blue-600 underline">＜0-Phasing-1＞</span>
            </Link>
            <br />
            <Link
              to="https://www.youtube.com/watch?v=qXWqPT0SnDQ"
              target="_blank"
            >
              ♾️ <span className="text-blue-600 underline">'Spanning'</span>
            </Link>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-2" src={image2} alt="2.jpg" />
            <p className="text-gray-400">Still image from “0-Phasing-1”</p>
          </div>
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold">
              You work both digitally and on canvas, how does this differ for
              you as an artist?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              I tend to immerse myself in the “message” and utilization of the
              medium. However, I embrace the uniqueness of each piece and try to
              place the message appropriately. While switching between digital
              and canvas, it feels like I’m getting a mental massage. Now that I
              think about it, for me canvas is meditation and philosophy while
              digital ends up being performance.
            </p>
            <p className="mb-3 mt-10 font-bold">
              What is your message to the audience?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              <span className="bg-lime-400">
                I want to give them the experience of being in front of a
                screen, or in a space long enough, to go from a state of
                bewildered to a state of relaxation. I think that energy comes
                from abstract concepts like ambiguity, immateriality, and
                interstitiality.
              </span>
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-2" src={image3} alt="3.jpg" />
            <p className="text-gray-400">‘Home’</p>
          </div>
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold">
              How would you characterize your work in one word?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              I would say “empty density” because I like to play with space and
              time, which is maximized by emptiness, and I believe that if it is
              composed well, it can draw the viewer in and embrace the concept.
            </p>
            <p className="mb-3 mt-10 font-bold">
              What do you focus on when you're working?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              I try to organize my inner world so that it's just me and my
              exploratory gaze, because imagining with balance and harmony is
              the joy and essence of my work.
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-2" src={image4} alt="4.jpg" />
            <p className="text-gray-400">‘A Camper’</p>
          </div>
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold">
              If you had to describe yourself, what would be the most
              appropriate?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              An artist who surfs her reverie. Even though I don't know how to
              swim, I think I'm someone who explores how to keep my balance on
              the waves, and when things get too close to the edge, I find
              myself coming up with images that are rather pleasant.
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-2" src={image5} alt="5.jpg" />
            <p className="text-gray-400">‘Crypsis’</p>
          </div>
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold">
              What has been the biggest influence on your writing career so far?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              I love art for no reason, I don't know why, but since I was a kid
              I tend to immerse myself in something and express it. I still get
              excited when I see a block breaking a white screen, an
              interruption of color, an unpredictable completion.
            </p>
            <p className="mb-3 mt-10 font-bold">
              What kind of feedback have you found most rewarding as an artist?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              Artwork is a result of an artist's exploration, and while I
              thoroughly enjoy the process of exploration, it's not always easy
              to face the result from a viewer's perspective. Recently, I had
              someone write about how my work resonated with them and it made me
              think, “I want to keep going, even if it's just gently. I should
              go further.”
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-2" src={image6} alt="6.jpg" />
            <p className="text-gray-400">‘A languid afternoon’</p>
          </div>
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold">
              Outside of your work, what are your biggest interests these days?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              I've become interested in the body, learning how muscles move and
              work and how they relate to each other in different parts of the
              body. The more I learn, the more fascinating it is. This organic
              interaction within the human body humbles me as an artist and as a
              person.
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-2" src={image7} alt="7.jpg" />
            <p className="text-gray-400">‘It's here!’</p>
          </div>
          <div className="mt-10">
            <p className="mb-3 mt-5 font-bold">
              What are some challenges you like to give yourself to become a
              better artist?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              <span className="bg-lime-400 mr-1">
                For me - drawing is breathing, painting is thinking, and
                multidisciplinary art is exploration.
              </span>
              <span>
                In order for every aspect to manifest, all three have to work
                together.
              </span>
            </p>
            <p className="mb-3 mt-10 font-bold">
              Is there anything you'd like to work on in the future?
            </p>
            <p className="mb-3 mt-5 line-clamp text-justify">
              I like to make art on a whim. I'd like to have a lot of paints, a
              lot of different colors, and I'd like to make a big piece that
              really plays with the texture of the brushstrokes. But I want to
              create a large art piece that projects a delicate sensibility, in
              a very analog and classic way.
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-5" src={image8} alt="8.jpg" />
            <p className="text-gray-400">Artist Choi Ji Won</p>
            <p className="mt-5">
              🌳 <span className="font-bold">Healing Moments</span>
              <span className="ml-1 mr-1">for</span>
              <span className="font-bold">Choi Ji Won</span>
            </p>
          </div>
          <div className="mt-10 text-center">
            <img className="mb-5" src={image9} alt="9.jpg" />
          </div>
          <div className="mt-10 mb-10">
            <p className="mb-3 mt-5 line-clamp text-justify">
              <span className="mr-1">
                The environment is very important to me. Immersed in nature,
                especially with all the colorful auditory stimuli, reinforces
                and reminds me of the will in my heart. When I’m in secluded
              </span>
              <span className="mr-1 underline font-bold">forest</span>
              <span className="">
                where you can’t hear people, only the sound of birds talking, I
                hold my breath and listen. I tune in as if I'm part of a flock.
                Even though I'm different, I feel like I'm one of them for a
                moment. It reminds me of my smallness and I feel reenergized.
              </span>
            </p>
          </div>
          <div className="mt-10 mb-10 text-right">
            <p className="font-bold">dropkitchen™</p>
            <Link
              to="https://dropkitchen.page.link/JH7c8gX65he2NRHh9"
              target="_blank"
            >
              <span className="text-blue-600 font-bold">
                https://dropkitchen.page.link/JH7c8gX65he2NRHh9
              </span>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
