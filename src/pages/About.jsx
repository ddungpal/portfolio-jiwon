import React from "react";
import Avatar from "../components/Avatar";
import Topbar from "../components/Topbar";
import profileimg from "../imgs/about/profile.png";

export default function About() {
  return (
    <>
      <Topbar />
      <div className="mt-5 container mx-auto lg:flex lg:flex-row-reverse">
        <div className="lg:w-1/4">
          <Avatar image={profileimg} />
        </div>
        <div className="lg:w-3/4">
          <hr className="mt-5" />
          <p className="p-5 line-clamp">
            Jiwon Choi created a piece about moment impressions as a visual
            artist based in Seoul. Mainly searching for space between senses
            which is difficult to define through painting. As a member of
            AHACOLLECTIVE, She is also interested in Interdisciplinary art and
            tries to design psychological experience through planning
            exhibitions. She mainly held an exhibition {"<"}FLOW(2022){">"},
            {"<"}Supernumerary Rainbow(2018)
            {">"}. Her significant project is {"<"}0-Phasing-1{">"} which was
            held in Platform-L Contemporary Art center in 2022 and she also
            worked as a communicator on {"<"}Global Public Art Project:Connect,
            BTS{">"} in 2021.
          </p>
          <hr className="mb-5" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="p-5 pt-0">
          <p className="mb-2 underline font-semibold">CV</p>
          <p>www.choijiwon.kr</p>
          <p>contact@choijiwon.kr</p>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Exhibition</p>
          <p>Solo</p>
          <div className="flex">
            <div className="w-[50px]">2023</div>
            <div>‘Dreaming escape from Orbit’, PAS gallery, Seoul (July)</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2018</div>
            <div>‘Supernumerary’, gallery Grida, Seoul</div>
          </div>
          <div className="flex">
            <div className="w-[50px]">2017</div>
            <div>Nuance; Shade of Meaning’, Art space Noon, Suwon</div>
          </div>
          <p className="mt-3">Double</p>
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
          <p className="mt-3">Group</p>
          <div className="flex">
            <div className="w-[50px]">2023</div>
            <div>‘The Preview Seoungsu’,(Upcoming, April)</div>
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
              ‘A boundary and crack of City, a new connection of Public art’,
              Leegangha museum, Gwangju
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
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Selected Program etc.</p>
          <div className="flex">
            <div className="w-[50px]">2022</div>
            <div>
              Gyeonggi Do Brand Contents Collaboration, Organization:Gyeonggi
              Do, Supervision: Gyeonggi Cultural Foundation
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
              Selected Artist of Ar Gyeonggi , Organization:Gyeonggi Cultural
              Foundation
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
              Public Art Project: Pop-up art Seongnam project, Organization: The
              ministry of Culture, Sports, Tourism,
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
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Collection</p>
          <p>
            Seongnam Culture Foundation, Ecobio Holdings Ltd., InSeoul27Golfclub
            Ltd., Joy Company etc.
          </p>
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Education</p>
          <div className="flex">
            <div className="w-[50px]">2017</div>
            <div>
              (MA) Asian painting, Seoul National University CREATIVE+’,
              Organization:KOCCA Supervision:Art Center NABI
            </div>
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
        </div>
        <div className="p-5 pt-0 ">
          <p className="mb-2 underline font-semibold">Lecture</p>
          <p>Kaywon Arts High school</p>
        </div>
      </div>
    </>
  );
}
