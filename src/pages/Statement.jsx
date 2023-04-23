import React from "react";
import Topbar from "../components/Topbar";

export default function Exibition() {
  return (
    <>
      <Topbar />
      <div className="container mx-auto lg:relative lg:h-[calc(100vh-80px)]">
        <div className="p-3 lg:absolute lg:bottom-20">
          <p className="mb-3 mt-5 text-xl font-bold">Inspiration</p>
          <p className="line-clamp text-justify">
            I am a person who is naturally excited by shapeless strokes. I
            imagine abstract things as a sort of introduction to exploring
            unknown and nebulous possibilities. Specifically, I'm curious about
            the value of the undefinable. Rather than striving for verbal
            definitions, I prefer to create circumstances with enough space and
            distance that allow the mind to wander; I believe that an excess of
            space can lead us to meet our inner selves. When gazing upon our
            inner selves, we can start to recognize foreign, alien environments
            that we've never been. I practice this "shapeless" approach in my
            life constantly. Erasing borders and describing poetic fancies with
            drawings and paintings is always my fundamental and final itinerary.
          </p>
          <p className="mb-3 mt-5 text-xl font-bold">Collaboration</p>
          <p className="line-clamp text-justify">
            Another way of facing the inner self is being together in tranquil,
            cooled moods. I believe collisions with strangers based on respect
            give birth to a more public sense of value. Through collaboration
            and thoughtful criticism with people who work in other
            mediums—whether fashion, traditional music, artificial intelligence,
            among others—we can find that knowledge can be sufficiently
            dissolved into a general, holistic existence. We can also redefine
            it on a relative aspect from each point of view. I expect that by
            distinguishing the things we encounter based on these collisions and
            criticisms will give us a warm, firm intuition for public worth.
            This is what I dreamed of: the way in which a private conversation
            about an inner thought is creatively absorbed and set free in the
            world.
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
            emotions. These occur briefly in a strong intuition that stems from
            a gazing experience. I applied it to a three-dimensional space I
            imagined, expressed as interdisciplinary art that crosses mediums.
            In the process, impromptu imagery becomes substituted for a design
            for human experience. By planning the experience in the exhibition
            space, a concept is being divided in the aspect of detailed
            space-time. Specifically, I focused on making 'Intended Contingency'
            which can lead people to feel sympathy naturally. I hope this
            sympathy will be a motive that can penetrate people's initial
            natures in the end.
          </p>
        </div>
      </div>
    </>
  );
}
