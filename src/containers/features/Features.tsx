import { FC } from "react";
import { Feature } from "../../components";

const FeaturesData = [
  {
    title: "Improving end distructs instanly",
    text: "From they fine jhon he give of rich he. They age and draw mrs like. Improving end distructs may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongs chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unabale her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Features: FC = () => {
  return (
    <div
      className="gpt3__features section__padding py-16 px-8 mobile:p-16 tablet:py-16 tablet:px-24 w-full flex justify-between flex-col tabletlg:flex-row"
      id="features"
    >
      <div className="gpt3__features-heading flex-1 flex justify-start items-start flex-col text-left tabletlg:mr-20 mt-0 mr-0 mb-8 ml-0">
        <h1 className="text-gradient mobile:text-[34px] mobile:leading-[45px] text-xl leading-[38px] font-extrabold font-manrope">
          The future is Now and You Just Need to Realize It. Step inot Future
          Today. & Make it Happen.
        </h1>
        <p className="text-base leading-[30px] font-medium text-subtext mt-8">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="gpt3__features-container flex-[1.5] flex justify-start items-center flex-col">
        {FeaturesData.map(({ title, text }, idx) => (
          <Feature title={title} text={text} key={title + idx} />
        ))}
      </div>
    </div>
  );
};

export default Features;
