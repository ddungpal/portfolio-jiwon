import React from "react";
import Avatar from "../components/Avatar";
import Topbar from "../components/Topbar";
import profileimg from "../imgs/about/profile.png";
import { useLanguageMode } from "../context/LanguageContext";

export default function About() {
  const { koMode, toggleKoMode } = useLanguageMode();
  return (
    <>
      <Topbar />
      <div className="container mx-auto text-right px-5 lg:px-1">
        <button onClick={() => toggleKoMode()}>
          {koMode ? (
            <h1 className="font-bold hover:text-indigo-300">Ko</h1>
          ) : (
            <h1 className="font-bold hover:text-indigo-300">En</h1>
          )}
        </button>
      </div>
      <div className="mt-5 container mx-auto lg:flex lg:flex-row-reverse">
        <div className="lg:w-1/4">
          <Avatar image={profileimg} />
        </div>
        <div className="lg:w-3/4">
          <hr className="mt-5" />
          {koMode ? (
            <p className="p-5 line-clamp text-justify">
              최지원은 서울에서 활동중인 시각예술가로, ‘순간의 인상’을 모티브로
              작업한다. 주로 회화를 통해 쉽게 정의할 수 없는 감각의 행간을
              탐구한다. 또한 콜렉티브 활동을 통해 다원예술에 관심을 가지고
              경험을 디자인하는 시도를 하고 있다. 주요 전시로 {"<"}FLOW(2022)
              {">"},{"<"}과잉무지개(2018){">"}이 있다. 주요 프로젝트로 {"<"}
              0-Phasing-1(0과 1의 페이징){">"},플랫폼엘 컨템포러리
              아트센터(2022)이 있으며, {"<"}공공미술프로젝트:Connect, BTS{">"}
              (2021)에 커뮤니케이션으로 참여한 바 있다.
            </p>
          ) : (
            <p className="p-5 line-clamp text-justify">
              Jiwon Choi created a piece about moment impressions as a visual
              artist based in Seoul. Mainly searching for space between senses
              which is difficult to define through painting. As a member of
              AHACOLLECTIVE, She is also interested in Interdisciplinary art and
              tries to design psychological experience through planning
              exhibitions. She mainly held an exhibition {"<"}FLOW(2022){">"},
              {"<"}Supernumerary Rainbow(2018)
              {">"}. Her significant project is {"<"}0-Phasing-1{">"} which was
              held in Platform-L Contemporary Art center in 2022 and she also
              worked as a communicator on {"<"}Global Public Art
              Project:Connect, BTS{">"} in 2021.
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
              <p>인스타그램: @ji1__choi</p>
              <p>이메일: contact@choijiwon.kr</p>
            </>
          ) : (
            <>
              <p className="mb-2 underline font-semibold">CV</p>
              <p>Webpage: www.choijiwon.kr</p>
              <p>Instagram: @ji1__choi</p>
              <p>Email: contact@choijiwon.kr</p>
            </>
          )}
        </div>
        <div className="p-5 pt-0 ">
          {koMode ? (
            <>
              <p className="mb-2 underline font-semibold">전시</p>
              <p className="italic">개인전</p>
              <div className="flex">
                <div className="w-[50px]">2023</div>
                <div>
                  ‘궤도에서 벗어나는 꿈을꿔요’, 플루리포텐트 아트스페이스
                  (Upcoming, July)
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2018</div>
                <div>‘과잉 무지개’, 갤러리 그리다, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2017</div>
                <div>‘감정의 뉘앙스’, 대안공간 눈, 수원</div>
              </div>
              <p className="mt-3 italic">이인전</p>
              <div className="flex">
                <div className="w-[50px]">2022</div>
                <div>‘Flow 김유정,최지원 2인전’, 우석갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2019</div>
                <div>
                  ‘투명한 시간 The transparent moment 정혜리,최지원 2인전’,
                  돈의문 전시관, 서울
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘릴리손,최지원 2인전’, ADM커뮤니티 갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2016</div>
                <div>
                  ‘인지사건 The Perception Lab 강우석,최지원 2인전’, 우석갤러리,
                  서울
                </div>
              </div>
              <p className="mt-3 italic">단체전</p>
              <div className="flex">
                <div className="w-[50px]">2023</div>
                <div>‘더 프리뷰 성수’,에스팩토리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘모호한 경계-2023 신소장품전’, 성남아트센터, 성남</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2022</div>
                <div>
                  ‘도시의 경계와 균열, 새로운 연결의 공공미술’, 이강하미술관,
                  광주
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘무형의 형태', 롯데백화점, 동탄</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2020</div>
                <div>‘감각과 시선’, 리서울갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘행복한 시선’, 우석갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2019</div>
                <div>
                  ‘신진작가공모전 New thinking New art’, 리서울갤러리, 서울
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘앞UP 2018’, 갤러리 그리다, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Fitting Room’, 우석갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2018</div>
                <div>‘미루’, 동덕아트갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2017</div>
                <div>‘풍경’, 성남아트센터, 성남</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2016</div>
                <div>'ㅁ의 실체’, Space599, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘三國G_ SPACELESS 한.독.일 교류전’, 우석갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘DMZ 일상드로잉백서’, 어울림 미술관, 고양</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘前半戰’, 우석갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>'MOVING STUDIO’, Space599, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘미.탐 석박사우수작품전', 상암DMC 미술관, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘청년작가공모전’, 성남아트센터, 성남</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2015</div>
                <div>‘상중모색 狀中摸索’, 우석갤러리, 서울</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘1+1+1+1++1', 겸재정선미술관, 서울</div>
              </div>
            </>
          ) : (
            <>
              <p className="mb-2 underline font-semibold">Exhibition</p>
              <p className="italic">Solo</p>
              <div className="flex">
                <div className="w-[50px]">2023</div>
                <div>
                  ‘The way to leave orbit’, Pluripotent art space, Seoul
                  (Upcoming, July)
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2018</div>
                <div>‘Supernumerary’, gallery Grida, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2017</div>
                <div>Nuance; Shade of Meaning’, Art space Noon, Suwon</div>
              </div>
              <p className="mt-3 italic">Double</p>
              <div className="flex">
                <div className="w-[50px]">2022</div>
                <div>‘Flow’, Woosuk gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2019</div>
                <div>‘The transparent moment’,Doneuimun museum, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Lily Son&Jiwon Choi’, ADM Community, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2016</div>
                <div>‘The Perception Lab’, Woosuk gallery, Seoul</div>
              </div>
              <p className="mt-3 italic">Group</p>
              <div className="flex">
                <div className="w-[50px]">2023</div>
                <div>‘The Preview Seongsu’,S factory, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  ‘A vague boundary-2023 new collections’, Seongnam Art center,
                  Seongnam
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2022</div>
                <div>
                  ‘A boundary and crack of City, a new connection of Public
                  art’, Leegangha museum, Gwangju
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Shapeless Shape', Lotte department store, Dongtan</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2020</div>
                <div>‘Sense and Gazing’, Lee Seoul gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Happiness Gazing’, Woosuk gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2019</div>
                <div>‘New thinking New art’, Lee Seoul gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Front UP 2018’, gallery Grida, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Fitting Room’, Woosuk gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2018</div>
                <div>‘MI-ROO’, Dongduk Art gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2017</div>
                <div>‘Landscape’, Seongnam Art center, Seongnam</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2016</div>
                <div>'Truth of ㅁ’, Space599, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  ‘三國G_ SPACELESS Korea-Germany-Japan’, Woosuk gallery, Seoul
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘DMZ Daily Drawing White book’, Aulim museum, Goyang</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘前半戰’, Woosuk gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>'MOVING STUDIO’, Space599, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Mi-Tam MA/Ph.D', Sang-am DMC museum, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘Young artist contest’, Seongnam Art center, Seongnam</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2015</div>
                <div>‘狀中摸索’, Woosuk gallery, Seoul</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>‘1+1+1+1++1', Gyeomjejungsun museum, Seoul</div>
              </div>
            </>
          )}
        </div>
        <div className="p-5 pt-0 ">
          {koMode ? (
            <>
              <p className="mb-2 underline font-semibold">주요활동 및 선정</p>
              <div className="flex">
                <div className="w-[50px]">2022</div>
                <div>
                  경기도 브랜드 콘텐츠 제작, 주최:경기도 주관: 경기문화재단
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  디자인 특허, 조명기구용 유리 (출원번호: 30-2021-0060051)
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>아트경기 선정작가, 주최/주관: 경기문화재단</div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2021</div>
                <div>
                  경기 예술인 경험공유 아카데미 호스트 ‘예술가의 포지션-작가와
                  기획자 사이’, 주최/주관: 경기문화재단
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  공공미술프로젝트: 팝업아트 성남프로젝트 작가 선정, 주최:
                  문화체육관광 주관: 성남시, 성남문화재단 선정기관: 오픈스페이스
                  블록스
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  창의 융합 콘텐츠 크리에이터 양성: CREATIVE+ 선정,
                  주최:한국콘텐츠진흥원 주관:아트센터나비
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2020</div>
                <div>
                  ‘글로벌 공공미술프로젝트: CONNECT,BTS’, 커뮤니케이션,
                  (주)Hzone
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
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
                <div className="w-[50px]">2022</div>
                <div>
                  Gyeonggi Do Brand Contents Collaboration,
                  Organization:Gyeonggi Do, Supervision: Gyeonggi Cultural
                  Foundation
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  Design Patent, glass of lighting apparatus (the application
                  number: 30-2021-0060051)
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  Selected Artist of Ar Gyeonggi , Organization:Gyeonggi
                  Cultural Foundation
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2021</div>
                <div>
                  Host of Gyeonggi Artist experience sharing academy ‘Artist’s
                  position-Between Artist and Planner’,
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>Organization:Gyeonggi Cultural Foundation</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  Public Art Project: Pop-up art Seongnam project, Organization:
                  The ministry of Culture, Sports, Tourism,
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  Supervision:Seongnamsi, SeongnamCultural Foundation, Selected
                  organization: Openspace BLOCKS
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  Selected Artist of ‘Originality, Fusion Contents Creator:
                  CREATIVE+’, Organization:KOCCA Supervision:Art Center NABI
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2020</div>
                <div>
                  ‘Global Public Art Project: CONNECT,BTS’, Communication, Hzone
                  Ltd.
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  Selected Artist of ‘Originality, Fusion Contents Creator:
                  CREATIVE+’, Organization:KOCCA Supervision:Art Center NABI
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
                성남문화재단, (주) 에코바이오홀딩스, (주) 인서울27골프클럽,
                조이컴퍼니 외 개인소장
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
                <div className="w-[50px]">2017</div>
                <div>서울대학교 미술대학 동양화과 석사졸업</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  (작품논문: 최지원, ‘즉흥적 드로잉을 통한 순간의 인상표현
                  연구’,서울대학교 대학원)
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2015</div>
                <div>서울대학교 미술대학 동양화과 학사졸업</div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <p className="mb-2 underline font-semibold">Education</p>
              <div className="flex">
                <div className="w-[50px]">2017</div>
                <div>(MA) Asian painting, Seoul National University</div>
              </div>
              <div className="flex">
                <div className="w-[50px]"></div>
                <div>
                  (Thesis: Jiwon Choi, ‘Investigating the Expression of Moment
                  Impression’,Seoul National University graduate school)
                </div>
              </div>
              <div className="flex">
                <div className="w-[50px]">2015</div>
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
      <div className="container mx-auto mt-5">
        {/* <hr className="mb-3 border-dashed border-indigo-500/75 lg:w-3/4" /> */}
        <div className="lg:w-1/4"></div>
        <div className="lg:w-3/4">
          <div className="p-5 pt-0">
            <p className="font-semibold">AHACOLLECTIVE(b.2018)</p>
            <p className="font-semibold">
              CHOI, Jiwon I CHUNG, Hyeree I KIM, Saetbyul I PARK, Juaee
            </p>
            <hr className="mt-2" />
            <p className="p-2 line-clamp text-justify">
              AHACOLLECTIVE is a collective formed in 2018 that digitally
              converts continuous perspectives such as tradition and analog to
              explore through media-based narrative methods. It constantly
              explores alternatives in a rapidly changing environment and
              studies the sustainability to be built, and expresses them through
              repetitive and symbolic mediums of movement in the work. Every
              year, we work in collaboration with various creators such as
              composers, visual artists, performers, and developers, expecting
              the impact of the context of the concept to be expressed, the
              physical properties of the tools used, and the solidarity of the
              human and temporal environment surrounding us.
            </p>
            <hr />
          </div>
        </div>
        <div className="p-5 pt-0">
          <p className="mb-2 underline font-semibold">CV</p>
          <p>Webpage: www.ahacollective.kr </p>
          <p>Instagram: @ahacollective.kr</p>
          <p>Email: ahacollective.info@gmail.com </p>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Exhibition</p>
          <p className="italic">Solo</p>
          <div className="flex">
            <div className="w-[50px]">2023</div>
            <div>
              ‘Mirroring Effect’, Pluripotent art space, Seoul, Korea (3-17
              Mar.)
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2022</div>
            <div>‘Piece of light’, Art for lab, Gyeonggi, Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]"></div>
            <div>
              ‘0-Phasing-1’, Platform-L Contemporary Art Center, Seoul, Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2021</div>
            <div>‘Ilwolobong_stream’, Gallery Insa art, Seoul, Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2019</div>
            <div>
              ‘無窮花三千里華麗江山(Mugungwha Samchunri Hwareogangsan)’,
              Seoripul gallery, Seoul, Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2018</div>
            <div>‘QuestionaryK-’, Artspace I-seak, Seoul, Korea</div>
          </div>
          <p className="mt-3 italic">Group</p>
          <div className="flex">
            <div className="w-[50px]">2023</div>
            <div>‘MIRO META ART:Mirror Moment’, Miro center,Gwangju, Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]"></div>
            <div>‘POV’, Pyo gallery, Seoul, Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2022</div>
            <div>‘Welcome Generation’, Seoul Art Center, Seoul, Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]"></div>
            <div>‘Nature’, Posco The Sharp gallery, Seoul, Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2021</div>
            <div>‘Hi, a new home’, Suchang Youth mansion, Daegu, Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2020</div>
            <div>‘WESS Portfolio Archive’, WESS, Seoul , Korea</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2019</div>
            <div>‘When Jaegang dancing’, Junganjijeom, Seoul, Korea</div>
          </div>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">
            Project / Public media art
          </p>
          <div className="flex">
            <div className="w-[50px]">2023</div>
            <div>《The Hyundai Seoul》</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2022</div>
            <div>《Suwon Media art show》,《Suncheonman Media Festival》</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2021</div>
            <div>
              《Namisum Media Festival》, 《Ganjeolgok Media Festival》, 《Muan
              Airport(Media Facade)》, <br />
              《Jeju Media Festival》, 《Cafe botbotbot(Interactive Media wall
              project)》
            </div>
          </div>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Award</p>
          <div className="flex">
            <div className="w-[50px]">2023</div>
            <div>6th Digital Art Portfolio Award, SAFxPyo gallery</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2022</div>
            <div>
              1st prize, Platform-L Live Arts Program, Platform-L Contemporary
              Art Center, Seoul, Korea
            </div>
          </div>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Selected Program</p>
          <div className="flex">
            <div className="w-[50px]">2020</div>
            <div>
              ‘Davinci Project: Media art X Science & Technology(AHAcollective),
              KOCCA, Seoul, Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2019</div>
            <div>
              ‘Davinci Project: Media art X Science & Technology(AHAcollective),
              KOCCA, Seoul, Korea
            </div>
          </div>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Collaborations</p>
          <div className="flex">
            <div className="w-[50px]">2023</div>
            <div>
              ‘Munmyo’, AHAcollectiveXMunmyo traditional music producer, Seoul,
              Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2022</div>
            <div>
              ‘0-Phasing-1’, AHAcollectiveXOurperccusion, Platform-L Live Arts
              program, Seoul, Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2021</div>
            <div>
              ‘Project: Shape of Taste’, AHAcollective X Harta X Legout, Seoul,
              Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2021</div>
            <div>
              ‘Project: Museum Silla’, AHAcollective X NIVL studio, Seoul, Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2021</div>
            <div>
              ‘Project: With Art’, AHAcollective X 0gallery, Seoul, Korea
            </div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2019</div>
            <div>
              Sound Collaboration with Yoon Jiwon(Composer), ‘Hwareogangsan’,
              ‘Ilwolobong’, Seoul, Korea
            </div>
          </div>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Design Patent</p>
          <p>Switching (for lighting fixture)</p>
        </div>
        {/* <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Education</p>
          <p>(MA,BA) Oriental painting, Seoul National University, Korea</p>
        </div> */}
      </div>
    </>
  );
}
