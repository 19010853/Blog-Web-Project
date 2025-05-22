import { Header, Footer, Category } from "../components";
import { defaultArticle, defaultAvatar } from "../components/images";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Header />
      <section className="lg:px-33 px-5 my-20 z-10 relative">
        <div className="relative w-full h-[30rem]">
          <Image
            width={100}
            height={100}
            src={defaultArticle}
            className="w-full h-[30rem] object-cover absolute rounded-2xl"
          />
          <div className="w-full h-[30rem] absolute bg-[#000000c3] rounded-2xl" />
          <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl font-semibold leading-[4rem] drop-shadow-lg">
            {article?.title}
          </h1>
        </div>

        <div className="flex items-center gap-3 mt-10">
          <button className="p-2 bg-indigo-800 rounded-lg">
            <i className="fas fa-thumbs-up"></i> {likes?.length || 0}
          </button>
          <button className="p-2 px-4 bg-indigo-800 rounded-lg">
            <i className="fas fa-bookmark text-red-500"></i>
          </button>
          <div className="p-2 px-4 bg-indigo-800 rounded-lg">
            <i className="fas fa-eye me-1"></i>8 views
          </div>
          <div className="p-2 px-4 bg-indigo-800 rounded-lg">
            <i className="fas fa-clock me-1"></i>8 mins read
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 my-10">
          <div>
            <div className="bg-[#07050dd3] p-4 rounded-3xl backdrop-blur-sm">
              <p>qsdgtjktrse 4yweywey4e tyeyeryerye ewtwetewtwet</p>
            </div>
            <div className="space-y-33 mt-10">
              <div className="flex items-center gap-3 bg-indigo-800 rounded-xl p-3 relative">
                <Image
                  width={100}
                  height={100}
                  src={defaultAvatar}
                  className="w-[5rem] h-[5rem] rounded-full"
                />
                <Image
                  width={500}
                  height={300}
                  src={"/assets/elements/arrow-2.png"}
                  className="w-[3rem] absolute left-[22rem] top-[-1rem] rotate-30 animate-bounce"
                />
                <div>
                  <h1 className="text-3xl font-bold">Mk Despihinxs</h1>
                  <p>"Writer at Desphixs</p>
                </div>
              </div>
              <div>
                <h1 className="mb-5 text-2xl">Leave a comment</h1>
                <div className="space-y-5 relative">
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Full Name</label>
                    <input
                      className="border-3 border-[#e1d1ff7a] p-2 rounded-lg w-full"
                      type="text"
                      value={profile?.full_name || "John Doe"}
                      readOnly
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label htmlFor="">Your Comment</label>
                    <textarea
                      className="border-3 border-[#e1d1ff7a] p-2 rounded-lg w-full"
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <button className=" lg:flex bg-gradient-to-r from-indigo-500 to-pink-500 cursor-pointer text-[15px] font-bold px-6 py-3 rounded-full border-0 me-3">
                      Submit Content <i className="fas fa-paper-plane ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h1 className="text-2xl mb-5">8 Comments</h1>
                <div className="space-y-6">
                  {comments?.map((comment, index) => (
                    <div className="bg-[#07050D] border border-[#110c1f] p-5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Image
                          width={100}
                          height={100}
                          src={defaultAvatar}
                          className="w-[2rem] rounded-full"
                        />
                        <div>
                          <h1 className="text-lg font-bold">
                            Nguyen Minh Khoi
                          </h1>
                          <p className="text-xs">15/01/2004</p>
                        </div>
                      </div>
                      <p className="text-sm mt-3 text-gray-500">
                        AKadadmasd;adADa
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Category />
        </div>
      </section>
      <Footer />
    </div>
  );
}
