import { FC } from "react";

type PageTitleProps = { title: string };

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="tf-page-title style-2">
      <div className="container-full">
        <div className="heading text-center">{title}</div>
      </div>
    </div>
  );
};

export default PageTitle;
