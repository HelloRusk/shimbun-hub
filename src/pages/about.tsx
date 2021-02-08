import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトはチームのためのブログスターター
              <a href="https://github.com/catnose99/team-blog-hub">
                Team Blog Hub
              </a>
              をforkし、日本の五大全国紙をまとめて閲覧できるようにしたものです。
            </p>
            <p>
              各社の「政治」「経済」「社会」「国際」のトピックのRSSフィードを集約しています。<br />
              ただし、毎日新聞は「政治」「経済」「社会」「国際」の各トピックのRSSフィードが提供されていないため、「速報」のみを掲載しています。<br />
            </p>
            <p>
              現在、1時間に1回更新を行っています。
            </p>
            <p>
              なお、読売・日経・産経の各社はRSSフィードを公式配信していないため、
              <a href="https://rss.wor.jp/">
                RSS愛好会
              </a>
              が提供している非公式のRSSフィードを使っています。
              もしこのサイトが便利だと感じた方は、
              <a href="https://rss.wor.jp/about/">
                RSS愛好会
              </a>
              の「運営を支援する」での支援も是非ご検討ください。
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
