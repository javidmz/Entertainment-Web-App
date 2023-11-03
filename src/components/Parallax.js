import Popcorn1 from "../assets/Popcorn_1.png";
import Popcorn2 from "../assets/Popcorn_2.png";
import Popcorn3 from "../assets/Popcorn_3.png";
import PopcornCup from "../assets/Mask group.png";
import FilmBoard from "../assets/clapperboard-29986_1280.png";
import { useEffect, useState } from "react";

const Parallax = () => {
  const [scrollPosY, setScrollPosY] = useState(0);
  const [lastYPosition, setLastYPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosY(position);

      if (window.innerHeight * 1.125 - position > 150) {
        setLastYPosition(position);
      } else {
        setLastYPosition(window.innerHeight * 1.125 - 130);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[150vh] relative overflow-hidden">
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] top-[10%] ml-[5%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 5}px)` }}
        className="absolute w-[25px] top-[25%] ml-[5%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[75%] ml-[10%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 3}px)` }}
        className="absolute w-[25px] top-[40%] ml-[15%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 5}px)` }}
        className="absolute w-[25px] top-[22%] ml-[20%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 7}px)` }}
        className="absolute w-[25px] blur-[2px] top-[82%] ml-[25%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[70%] ml-[10%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[50%] ml-[17%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 8}px)` }}
        className="absolute w-[25px] top-[15%] ml-[18%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 5}px)` }}
        className="absolute w-[25px] top-[13%] ml-[42%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 9}px)` }}
        className="absolute w-[25px] top-[16%] ml-[30%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] top-[9%] ml-[65%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 3}px)` }}
        className="absolute w-[25px] blur-[2px] top-[82%] ml-[25%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 5}px)` }}
        className="absolute w-[25px] top-[70%] ml-[30%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 7}px)` }}
        className="absolute w-[25px] top-[68%] ml-[35%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 6}px)` }}
        className="absolute w-[25px] top-[14%] ml-[40%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 5}px)` }}
        className="absolute w-[25px] top-[7%] ml-[45%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[19%] ml-[50%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 5}px)` }}
        className="absolute w-[25px] top-[4%] ml-[55%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 2}px)` }}
        className="absolute w-[25px] blur-[2px] top-[71%] ml-[60%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 2}px)` }}
        className="absolute w-[25px] top-[57%] ml-[65%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[68%] ml-[70%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] top-[14%] ml-[75%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[92%] ml-[80%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 5}px)` }}
        className="absolute w-[25px] top-[23%] ml-[85%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 8}px)` }}
        className="absolute w-[25px] top-[34%] ml-[90%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[46%] ml-[95%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] blur-[1px] top-[58%] ml-[83%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 3}px)` }}
        className="absolute w-[25px] blur-[2px] top-[63%] ml-[17%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] blur-[1px] top-[73%] ml-[62%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] blur-[2px] top-[26%] ml-[92%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 2}px)` }}
        className="absolute w-[25px] blur-[2px] top-[31%] ml-[30%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[45%] ml-[42%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 4}px)` }}
        className="absolute w-[25px] blur-[1px] top-[42%] ml-[38%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] top-[50%] ml-[45%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[38%] ml-[39%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 5}px)` }}
        className="absolute w-[25px] blur-[1px] top-[40%] ml-[58%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 3}px)` }}
        className="absolute w-[25px] blur-[1px] top-[49%] ml-[60%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] top-[46%] ml-[62%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] blur-[1px] top-[58%] ml-[68%]"
      />
      <img
        src={Popcorn1}
        alt="popcorn"
        style={{ transform: `translateY(${-scrollPosY / 3}px)` }}
        className="absolute w-[25px] blur-[2px] top-[63%] ml-[47%]"
      />
      <img
        src={Popcorn2}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 7}px)` }}
        className="absolute w-[25px] blur-[1px] top-[53%] ml-[62%]"
      />
      <img
        src={Popcorn3}
        alt="popcorn"
        style={{ transform: `translateY(${scrollPosY / 4}px)` }}
        className="absolute w-[25px] blur-[2px] top-[76%] ml-[29%]"
      />
      <div
        style={{ transform: `translateY(${lastYPosition}px)` }}
        className="absolute top-[25%] w-full text-center text-red-700 font-bold z-10"
      >
        What to watch tonight?
      </div>
      <img
        src={PopcornCup}
        alt="popcorn"
        style={{
          transform: `translateX(${scrollPosY / 2}px) rotate(${
            scrollPosY / 5
          }deg)`,
        }}
        className="absolute top-[50%] mx-[-40%] xs:mx-[-5%] sm:mx-[10%] md:mx-[20%] lg:mx-[45%] w-48"
      />
      <img
        src={FilmBoard}
        alt="popcorn"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60"
      />
    </div>
  );
};

export default Parallax;
