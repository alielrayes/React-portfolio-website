import "./main.css";
const Main = () => {
  return (
    <main className="flex">
      
      <section className="flex  left-section">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>

      <section className=" flex right-section">
        {["aa", "bb", "cc", 1, 7].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} src="./1.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Landing Page 2 </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
