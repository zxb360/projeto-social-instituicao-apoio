import { useEffect, useState, useRef } from "react";
import "./storyBlack.css";

interface StoryBlockProps {
  image: string;
  text: string;
  title: string;
  reverse?: boolean;
}

export default function StoryBlock({ title, image, text, reverse }: StoryBlockProps) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

     useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
     <div
      ref={ref}
      className={`story-block ${visible ? "show" : ""} ${
        reverse ? "reverse" : ""
      }`}
    >
      <img src={image} alt="" className="story-img" />
      <p className="story-text"><h2 className="story-title">{title}</h2>{text}</p>
    </div>
  );
}