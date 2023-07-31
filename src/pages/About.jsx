import React, { useState } from "react";
// import Avatar from "../components/Avatar";
import Topbar from "../components/Topbar";
// import profileimg from "../imgs/about/profile.png";
import { useLanguageMode } from "../context/LanguageContext";
import singleBtn from "../imgs/about/single.png";
import teamBtn from "../imgs/about/team.png";
import selectBtn from "../imgs/about/select.png";
import { useQuery } from "@tanstack/react-query";
import { getInterview } from "../api/firebase";
import { Link } from "react-router-dom";

export default function About() {
  const { koMode, toggleKoMode } = useLanguageMode();
  const [isSingeBtnHover, setIsSingleBtnHover] = useState(false);
  const [isTeamBtnHover, setIsTeamBtnHover] = useState(false);
  const [part, setPart] = useState("Single");
  const [category, setCategory] = useState("statement");
  const {
    isLoading,
    error,
    data: interviewImg,
  } = useQuery(["interviewImg"], getInterview);

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
          <button
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
          </button>
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
          <button
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
          </button>
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
          <div>
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
          </div>
        </div>
        {part === "Single" ? (
          <div>
            <div className="mt-5 container mx-auto">
              <div className="lg:w-1/4">
                {/* <Avatar image={profileimg} /> */}
              </div>
              <div className="lg:w-3/4">
                <hr className="mt-5" />
                {koMode ? (
                  <p className="p-5 line-clamp text-justify">
                    최지원은 서울에서 활동중인 시각예술가로, ‘순간의 인상’을
                    모티브로 작업한다. 주로 회화를 통해 쉽게 정의할 수 없는
                    감각의 행간을 탐구한다. 또한 콜렉티브 활동을 통해 다원예술에
                    관심을 가지고 경험을 디자인하는 시도를 하고 있다. 주요
                    전시로 {"<"}
                    FLOW(2022)
                    {">"},{"<"}과잉무지개(2018){">"}이 있다. 주요 프로젝트로{" "}
                    {"<"}
                    0-Phasing-1(0과 1의 페이징){">"},플랫폼엘 컨템포러리
                    아트센터(2022)이 있으며, {"<"}공공미술프로젝트:Connect, BTS
                    {">"}
                    (2021)에 커뮤니케이션으로 참여한 바 있다.
                  </p>
                ) : (
                  <p className="p-5 line-clamp text-justify">
                    Jiwon Choi created a piece about moment impressions as a
                    visual artist based in Seoul. Mainly searching for space
                    between senses which is difficult to define through
                    painting. As a member of AHACOLLECTIVE, She is also
                    interested in Interdisciplinary art and tries to design
                    psychological experience through planning exhibitions. She
                    mainly held an exhibition {"<"}FLOW(2022){">"},{"<"}
                    Supernumerary Rainbow(2018)
                    {">"}. Her significant project is {"<"}0-Phasing-1{">"}{" "}
                    which was held in Platform-L Contemporary Art center in 2022
                    and she also worked as a communicator on {"<"}Global Public
                    Art Project:Connect, BTS{">"} in 2021.
                  </p>
                )}
                <hr className="mb-5" />
              </div>
            </div>
            <div className="container mx-auto">
              <div className="p-5 pt-0">
                {koMode ? (
                  <>
                    <p className="mb-2 underline font-semibold">CV</p>
                    <p>웹사이트: www.choijiwon.kr</p>
                    <p>인스타그램: @jiwonchoi_painting</p>
                    <p>이메일: jiwonchoistudio@gmail.com</p>
                  </>
                ) : (
                  <>
                    <p className="mb-2 underline font-semibold">CV</p>
                    <p>Webpage: www.choijiwon.kr</p>
                    <p>Instagram: @jiwonchoi_painting</p>
                    <p>Email: jiwonchoistudio@gmail.com</p>
                  </>
                )}
              </div>
              <div className="p-5 pt-0 ">
                {koMode ? (
                  <>
                    <p className="mb-2 underline font-semibold">전시</p>
                    <p className="italic">개인전</p>
                    <div className="flex">
                      <div className="w-min mr-2">2023</div>
                      <div>
                        ‘춤추는 내향성’, 플루리포텐트 아트스페이스, 서울
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2018</div>
                      <div>‘과잉 무지개’, 갤러리 그리다, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2017</div>
                      <div>‘감정의 뉘앙스’, 대안공간 눈, 수원</div>
                    </div>
                    <p className="mt-3 italic">이인전</p>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>‘Flow 김유정,최지원 2인전’, 우석갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>
                        ‘투명한 시간 The transparent moment 정혜리,최지원
                        2인전’, 돈의문 전시관, 서울
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>‘릴리손,최지원 2인전’, ADM커뮤니티 갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>
                        ‘인지사건 The Perception Lab 강우석,최지원 2인전’,
                        우석갤러리, 서울
                      </div>
                    </div>
                    <p className="mt-3 italic">단체전</p>
                    <div className="flex">
                      <div className="w-min mr-2">2023</div>
                      <div>‘더 프리뷰 성수’,에스팩토리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2023</div>
                      <div>
                        ‘모호한 경계-2023 신소장품전’, 성남아트센터, 성남
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        ‘도시의 경계와 균열, 새로운 연결의 공공미술’,
                        이강하미술관, 광주
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>‘무형의 형태', 롯데백화점, 동탄</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>‘감각과 시선’, 리서울갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>‘행복한 시선’, 우석갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>
                        ‘신진작가공모전 New thinking New art’, 리서울갤러리,
                        서울
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>‘앞UP 2018’, 갤러리 그리다, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>‘Fitting Room’, 우석갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2018</div>
                      <div>‘미루’, 동덕아트갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2017</div>
                      <div>‘풍경’, 성남아트센터, 성남</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>'ㅁ의 실체’, Space599, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>
                        ‘三國G_ SPACELESS 한.독.일 교류전’, 우석갤러리, 서울
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>‘DMZ 일상드로잉백서’, 어울림 미술관, 고양</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>‘前半戰’, 우석갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>'MOVING STUDIO’, Space599, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>‘미.탐 석박사우수작품전', 상암DMC 미술관, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>‘청년작가공모전’, 성남아트센터, 성남</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2015</div>
                      <div>‘상중모색 狀中摸索’, 우석갤러리, 서울</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2015</div>
                      <div>‘1+1+1+1++1', 겸재정선미술관, 서울</div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mb-2 underline font-semibold">Exhibition</p>
                    <p className="italic">Solo</p>
                    <div className="flex">
                      <div className="w-min mr-2">2023</div>
                      <div>
                        'Swaying Introversion', Pluripotent artspace, Seoul
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2018</div>
                      <div>‘Supernumerary’, gallery Grida, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2017</div>
                      <div>
                        Nuance; Shade of Meaning’, Art space Noon, Suwon
                      </div>
                    </div>
                    <p className="mt-3 italic">Double</p>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>‘Flow’, Woosuk gallery, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>
                        ‘The transparent moment’,Doneuimun museum, Seoul
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>‘Lily Son&Jiwon Choi’, ADM Community, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>‘The Perception Lab’, Woosuk gallery, Seoul</div>
                    </div>
                    <p className="mt-3 italic">Group</p>
                    <div className="flex">
                      <div className="w-min mr-2">2023</div>
                      <div>‘The Preview Seongsu’,S factory, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2023</div>
                      <div>
                        ‘A vague boundary-2023 new collections’, Seongnam Art
                        center, Seongnam
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        ‘A boundary and crack of City, a new connection of
                        Public art’, Leegangha museum, Gwangju
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        ‘Shapeless Shape', Lotte department store, Dongtan
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>‘Sense and Gazing’, Lee Seoul gallery, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>‘Happiness Gazing’, Woosuk gallery, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>
                        ‘New thinking New art’, Lee Seoul gallery, Seoul
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>‘Front UP 2018’, gallery Grida, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2019</div>
                      <div>‘Fitting Room’, Woosuk gallery, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2018</div>
                      <div>‘MI-ROO’, Dongduk Art gallery, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2017</div>
                      <div>‘Landscape’, Seongnam Art center, Seongnam</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>'Truth of ㅁ’, Space599, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>
                        ‘三國G_ SPACELESS Korea-Germany-Japan’, Woosuk gallery,
                        Seoul
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>
                        ‘DMZ Daily Drawing White book’, Aulim museum, Goyang
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>‘前半戰’, Woosuk gallery, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>'MOVING STUDIO’, Space599, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>‘Mi-Tam MA/Ph.D', Sang-am DMC museum, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2016</div>
                      <div>
                        ‘Young artist contest’, Seongnam Art center, Seongnam
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2015</div>
                      <div>‘狀中摸索’, Woosuk gallery, Seoul</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2015</div>
                      <div>‘1+1+1+1++1', Gyeomjejungsun museum, Seoul</div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-5 pt-0 ">
                {koMode ? (
                  <>
                    <p className="mb-2 underline font-semibold">
                      주요활동 및 선정
                    </p>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        경기도 브랜드 콘텐츠 제작, 주최:경기도 주관:
                        경기문화재단
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        디자인 특허, 조명기구용 유리 (출원번호: 30-2021-0060051)
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>아트경기 선정작가, 주최/주관: 경기문화재단</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>
                        경기 예술인 경험공유 아카데미 호스트 ‘예술가의
                        포지션-작가와 기획자 사이’, 주최/주관: 경기문화재단
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>
                        공공미술프로젝트: 팝업아트 성남프로젝트 작가 선정, 주최:
                        문화체육관광 주관: 성남시, 성남문화재단 선정기관:
                        오픈스페이스 블록스
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>
                        창의 융합 콘텐츠 크리에이터 양성: CREATIVE+ 선정,
                        주최:한국콘텐츠진흥원 주관:아트센터나비
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>
                        글로벌 공공미술프로젝트: CONNECT,BTS, 커뮤니케이션,
                        (주)Hzone
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>
                        창의 융합 콘텐츠 크리에이터 양성: CREATIVE+ 선정,
                        주최:한국콘텐츠진흥원 주관:아트센터나비
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mb-2 underline font-semibold">
                      Selected Program etc.
                    </p>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        Gyeonggi Do Brand Contents Collaboration,
                        Organization:Gyeonggi Do, Supervision: Gyeonggi Cultural
                        Foundation
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        Design Patent, glass of lighting apparatus (the
                        application number: 30-2021-0060051)
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2022</div>
                      <div>
                        Selected Artist of Ar Gyeonggi , Organization:Gyeonggi
                        Cultural Foundation
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>
                        Host of Gyeonggi Artist experience sharing academy
                        ‘Artist’s position-Between Artist and Planner’,
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>Organization:Gyeonggi Cultural Foundation</div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>
                        Public Art Project: Pop-up art Seongnam project,
                        Organization: The ministry of Culture, Sports, Tourism,
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>
                        Supervision:Seongnamsi, SeongnamCultural Foundation,
                        Selected organization: Openspace BLOCKS
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2021</div>
                      <div>
                        Selected Artist of ‘Originality, Fusion Contents
                        Creator: CREATIVE+’, Organization:KOCCA Supervision:Art
                        Center NABI
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>
                        Global Public Art Project: CONNECT,BTS, Communication,
                        Hzone Ltd.
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2020</div>
                      <div>
                        Selected Artist of ‘Originality, Fusion Contents
                        Creator: CREATIVE+’, Organization:KOCCA Supervision:Art
                        Center NABI
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-5 pt-0 ">
                {koMode ? (
                  <>
                    <p className="mb-2 underline font-semibold">작품소장</p>
                    <p>
                      성남문화재단, (주) 에코바이오홀딩스, (주)
                      인서울27골프클럽, 조이컴퍼니 외 개인소장
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mb-2 underline font-semibold">Collection</p>
                    <p>
                      Seongnam Culture Foundation, Ecobio Holdings Ltd.,
                      InSeoul27Golfclub Ltd., Joy Company etc.
                    </p>
                  </>
                )}
              </div>
              <div className="p-5 pt-0 ">
                {koMode ? (
                  <>
                    {" "}
                    <p className="mb-2 underline font-semibold">학력</p>
                    <div className="flex">
                      <div className="w-min mr-2">2017</div>
                      <div>
                        서울대학교 미술대학 동양화과 석사졸업 (작품논문: 최지원,
                        ‘즉흥적 드로잉을 통한 순간의 인상표현 연구’,서울대학교
                        대학원)
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2015</div>
                      <div>서울대학교 미술대학 동양화과 학사졸업</div>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <p className="mb-2 underline font-semibold">Education</p>
                    <div className="flex">
                      <div className="w-min mr-2">2017</div>
                      <div>
                        (MA) Asian painting, Seoul National University (Thesis:
                        Jiwon Choi, ‘Investigating the Expression of Moment
                        Impression’,Seoul National University graduate school)
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-min mr-2">2015</div>
                      <div>(BA) Asian painting, Seoul National University</div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-5 pt-0 ">
                {koMode ? (
                  <>
                    <p className="mb-2 underline font-semibold">강의</p>
                    <p>국제대학교 겸임교수</p>
                    <p>계원예술고등학교 출강</p>
                  </>
                ) : (
                  <>
                    <p className="mb-2 underline font-semibold">Lecture</p>
                    <p>Affiliated Professor, Kookje University</p>
                    <p>Kaywon Arts High school</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto mt-5">
            {/* <hr className="mb-3 border-dashed border-indigo-500/75 lg:w-3/4" /> */}
            <div className="lg:w-1/4"></div>
            <div className="lg:w-3/4">
              <div className="p-5 pt-0">
                {koMode ? (
                  <>
                    {" "}
                    {/* <p className="font-semibold">아하콜렉티브(b.2018)</p>
                    <p className="font-semibold">
                      최지원 I 정혜리 I 김샛별 I 박주애
                    </p> */}
                    <hr className="mt-2" />
                    <p className="p-2 line-clamp text-justify">
                      아하콜렉티브는 2018년 결성된 콜렉티브로 전통, 아날로그
                      등과 같은 연속된 관점을 디지털 방식으로 변환하여 미디어
                      기반의 서사방식을 통해 탐구한다. 빠르게 변화하는 환경
                      속에서 끊임없이 대안을 탐색하며 지속 가능성을 연구하고,
                      이를 작품 안에서 움직임의 반복성, 상징성을 띤 매개를
                      통하여 표현한다. 매년 작곡가, 시각예술가, 연주자, 개발자
                      등 다양한 크리에이터와의 협업을 통해 표현하고자 하는
                      개념의 맥락, 사용하는 도구의 물성, 주변을 둘러싼
                      인적/시공간적 환경의 연대가 맞물릴 때 발현되는 파급력을
                      기대하며 작업하고 있다.
                    </p>
                  </>
                ) : (
                  <>
                    {" "}
                    {/* <p className="font-semibold">AHACOLLECTIVE(b.2018)</p>
                    <p className="font-semibold">
                      CHOI, Jiwon I CHUNG, Hyeree I KIM, Saetbyul I PARK, Juaee
                    </p> */}
                    <hr className="mt-2" />
                    <p className="p-2 line-clamp text-justify">
                      AHACOLLECTIVE is a collective formed in 2018 that
                      digitally converts continuous perspectives such as
                      tradition and analog to explore through media-based
                      narrative methods. It constantly explores alternatives in
                      a rapidly changing environment and studies the
                      sustainability to be built, and expresses them through
                      repetitive and symbolic mediums of movement in the work.
                      Every year, we work in collaboration with various creators
                      such as composers, visual artists, performers, and
                      developers, expecting the impact of the context of the
                      concept to be expressed, the physical properties of the
                      tools used, and the solidarity of the human and temporal
                      environment surrounding us.
                    </p>
                  </>
                )}
                <hr />
              </div>
            </div>
            <div className="p-5 pt-0">
              {koMode ? (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">CV</p>
                  <p>웹사이트: www.ahacollective.kr </p>
                  <p>인스타그램: @ahacollective.kr</p>
                  <p>이메일: ahacollective.info@gmail.com </p>
                </>
              ) : (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">CV</p>
                  <p>Webpage: www.ahacollective.kr </p>
                  <p>Instagram: @ahacollective.kr</p>
                  <p>Email: ahacollective.info@gmail.com </p>
                </>
              )}
            </div>
            <div className="p-5 pt-0 ">
              {koMode ? (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">전시</p>
                  <p className="italic">개인전</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>
                      ‘Mirroring Effect’, 플루리포텐트 아트스페이스, 서울
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>‘Piece of light’, 아트포랩, 경기</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      ‘0-Phasing-1(0과1의 페이징)’,플랫폼엘 컨템포러리
                      아트센터,서울
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>‘일월오봉_stream’, 갤러리 인사아트, 서울</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>‘무궁화삼천리화려강산’,서리풀청년아트갤러리, 서울</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2018</div>
                    <div>‘의문의 K’, 아트스페이스 이색, 서울</div>
                  </div>
                  <p className="mt-3 italic">단체전</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>‘MIRO META ART:Mirror Moment’, 미로아트센터, 광주</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>
                      ‘POV-제6회 디지털 포트폴리오 박람회 선정작가전’, 표갤러리,
                      서울
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      ‘Welcome Generation’, 예술의 전당 한가람 디자인 미술관,
                      서울
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>‘자연전’, 포스코 더샵 갤러리, 서울</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>‘Hi, a new home!’, 수창청춘맨숀, 대구</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2020</div>
                    <div>‘WESS 포트폴리오 아카이브’, WESS, 서울</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>‘제강이 춤을 출 때’, 중간지점, 서울</div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">Exhibition</p>
                  <p className="italic">Solo</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>
                      ‘Mirroring Effect’, Pluripotent art space, Seoul, Korea
                      (3-17 Mar.)
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>‘Piece of light’, Art for lab, Gyeonggi, Korea</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      ‘0-Phasing-1’, Platform-L Contemporary Art Center, Seoul,
                      Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      ‘Ilwolobong_stream’, Gallery Insa art, Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>
                      ‘無窮花三千里華麗江山(Mugungwha Samchunri Hwareogangsan)’,
                      Seoripul gallery, Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2018</div>
                    <div>‘QuestionaryK-’, Artspace I-seak, Seoul, Korea</div>
                  </div>
                  <p className="mt-3 italic">Group</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>
                      ‘MIRO META ART:Mirror Moment’, Miro center,Gwangju, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>‘POV’, Pyo gallery, Seoul, Korea</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      ‘Welcome Generation’, Seoul Art Center, Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>‘Nature’, Posco The Sharp gallery, Seoul, Korea</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      ‘Hi, a new home’, Suchang Youth mansion, Daegu, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2020</div>
                    <div>‘WESS Portfolio Archive’, WESS, Seoul , Korea</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>
                      ‘When Jaegang dancing’, Junganjijeom, Seoul, Korea
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-5 pt-0 ">
              {koMode ? (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">프로젝트</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>《더현대 서울》</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>《수원 미디어아트쇼》,《순천만 미디어아트쇼》</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      《남이섬 미디어아트 페스티벌》, 《간절곶 미디어아트
                      페스티벌》, 《무안공항 미디어 파사드》, 《제주 미디어아트
                      페스티벌》, 《카페 봇봇봇(인터렉티브 미디어월 프로젝트)》
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">
                    Project / Public media art
                  </p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>《The Hyundai Seoul》</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      《Suwon Media art show》,《Suncheonman Media Festival》
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      《Namisum Media Festival》, 《Ganjeolgok Media Festival》,
                      《Muan Airport(Media Facade)》, <br />
                      《Jeju Media Festival》, 《Cafe botbotbot(Interactive
                      Media wall project)》
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-5 pt-0 ">
              {koMode ? (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">수상</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>
                      제 6회 디지털아트 포트폴리오 박람회 선정, 주최/주관:
                      서울예술재단,표갤러리
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      최우수 작품상, 플랫폼엘 라이브아츠 프로그램, 주최/주관:
                      플랫폼엘 컨템포러리 아트센터
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">Award</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>6th Digital Art Portfolio Award, SAFxPyo gallery</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      1st prize, Platform-L Live Arts Program, Platform-L
                      Contemporary Art Center, Seoul, Korea
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-5 pt-0 ">
              {koMode ? (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">선정</p>
                  <div className="flex">
                    <div className="w-min mr-2">2020</div>
                    <div>
                      (과학기술X미디어아트) 다빈치 프로젝트 공모(팀)선정,
                      주최/주관: 한국콘텐츠진흥원
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>
                      (ArtXSci&Tech) 다빈치 프로젝트 공모(팀) 선정, 주최/주관:
                      한국콘텐츠진흥원
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">
                    Selected Program
                  </p>
                  <div className="flex">
                    <div className="w-min mr-2">2020</div>
                    <div>
                      ‘Davinci Project: Media art X Science &
                      Technology(AHAcollective), KOCCA, Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>
                      ‘Davinci Project: Media art X Science &
                      Technology(AHAcollective), KOCCA, Seoul, Korea
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-5 pt-0 ">
              {koMode ? (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">협업</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>‘문묘’, 디지털 아트X국악, 서울</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      ‘0과 1의 페이징’, 라이브 아츠 퍼포먼스 콜라보,
                      아하콜렉티브 X 아우어퍼쿠션
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      ‘프로젝트: Shape of Taste’, 아하콜렉티브 X Harta X Legout,
                      서울
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      ‘Project: Museum Silla’, 아하콜렉티브 X NIVL studio, 서울
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>‘Project: With Art’,아하콜렉티브 X 0gallery, 서울</div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>
                      ‘사운드 콜라보레이션 윤지원(작곡)’, 작품, ‘화려강산’,
                      ‘일월오봉’, 서울
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <p className="mb-2 underline font-semibold">Collaborations</p>
                  <div className="flex">
                    <div className="w-min mr-2">2023</div>
                    <div>
                      ‘Munmyo’, AHAcollectiveXMunmyo traditional music producer,
                      Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2022</div>
                    <div>
                      ‘0-Phasing-1’, AHAcollectiveXOurperccusion, Platform-L
                      Live Arts program, Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      ‘Project: Shape of Taste’, AHAcollective X Harta X Legout,
                      Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      ‘Project: Museum Silla’, AHAcollective X NIVL studio,
                      Seoul, Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2021</div>
                    <div>
                      ‘Project: With Art’, AHAcollective X 0gallery, Seoul,
                      Korea
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-min mr-2">2019</div>
                    <div>
                      Sound Collaboration with Yoon Jiwon(Composer),
                      ‘Hwareogangsan’, ‘Ilwolobong’, Seoul, Korea
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* <div className="p-5 pt-0 ">
            {koMode ? (
              <>
                {" "}
                <p className="mb-2 underline font-semibold">Design Patent</p>
                <p>Switching (for lighting fixture)</p>
              </>
            ) : (
              <>
                {" "}
                <p className="mb-2 underline font-semibold">Design Patent</p>
                <p>Switching (for lighting fixture)</p>
              </>
            )}
          </div> */}
            {/* <div className="p-5 pt-0 ">
            <p className="mb-2 underline font-semibold">Education</p>
            <p>(MA,BA) Oriental painting, Seoul National University, Korea</p>
          </div> */}
          </div>
        )}
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
          <button
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
          </button>
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
