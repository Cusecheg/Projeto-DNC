import db from "@/lib/db";
import ShortenText from "../ShortText/shortText";

interface CardPublicationProps{
  title: string,
  text: string,
  image: string,
}





const CardPublication = ({title, text, image} : CardPublicationProps) => (

    <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg bg-cover " src={image} alt="error" style={{width: "380px"}} />
      </a>

      <div className="justify-end p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-words">
        <ShortenText text={text} />
        </p>

        <a
          href="/publicacoes"
          className="inline-flex items-center px-3 py-2 text-sm font-medium
        text-center text-white bg-black rounded-lg hover:opacity-50 focus:ring-4
        focus:outline-none"
        >
          Link
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </>
  )



const  SectionHome = async () => {
  const posts = await db.post.findMany();
  const recentPost = posts.splice(-3);
  return (
    <main className="grid place-items-center w-full  bg-gray-200">
      <section className="grid place-items-center p-8 ">
        <h1
          className="flex justify-center font-Alegreya  font-bold text-black"
          style={{ fontSize: "2.5rem" }}
        >
          Publicações Recentes
        </h1>
        <section className="flex justify-around flex-col  gap-4 2xl:flex-row m-8">
        {recentPost.map((post) => (
          <CardPublication
            key={post.id}
            title={post.title}
            text={post.text}
            image={post.image}
          />
        ))}
        </section>
      </section>
    </main>
  );
};

export default SectionHome;
