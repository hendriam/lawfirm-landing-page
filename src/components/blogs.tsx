import { blogs } from "../data.ts";

export default function Blogs() {
    return (
        <section className="w-full my-20">
            <h3 className="text-2xl text-center text-[#FCA311]">Blogs</h3>
            <p className="md:text-2xl lg:text-[40px] text-[18px] lg:leading-12 leading-normal mt-3 text-center">
                Stay informed with our expert insights, legal <br className="hidden md:block" />{" "}
                updates, and practical tips to navigate the <br className="hidden md:block" />{" "}
                complexities of the law.
            </p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
                {blogs.map((blog) => (
                    <figure
                        key={blog.id}
                        className="shadow-lg hover:shadow-[0_15px_15px_rgba(0.25,0.25,0.25,0.25)] transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-3d border-[#FCA311] border-b-4 hover:cursor-pointer"
                    >
                        <img src={blog.image} alt="blog1" className="aspect-auto w-full" />
                        <figcaption className="p-5">
                            <h4 className="text-xl font-bold">{blog.title}</h4>
                            <p className="text-[#FCA311]">
                                {blog.date} | {blog.category}
                            </p>
                            <p className="mt-3">{blog.description}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>

            <div className="w-fit mx-auto mt-5">
                <button className="bg-[#FCA311] hover:opacity-80 hover:cursor-pointer py-2 px-3.5 font-bold transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-3d">
                    See more
                </button>
            </div>
        </section>
    );
}
