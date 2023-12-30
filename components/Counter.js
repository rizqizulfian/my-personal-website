import OridoCounter from "./OridoCounter";

const counts = [
  { name: "Review PR", value: 215 },
  { name: "Certificates", value: 15 },
  { name: "Own Projects", value: 5 },
  { name: "Years of Experience", value: 3 },
];
const Counter = () => {
  return (
    <div className="orido_tm_section w-full h-auto clear-both float-left">
      <div className="orido_tm_counter w-full h-auto clear-both float-left mb-[92px]">
        <div className="container">
          <div className="counter_list w-full h-auto clear-both float-left">
            <ul className="ml-[-30px]">
              {counts.map((count) => (
                <li className="mb-[30px] float-left pl-[30px] w-1/4 text-center">
                  <div className="list_inner w-full h-auto clear-both float-left relative">
                    <h3 className="font-normal text-[64px] font-kaushan mb-[10px] relative z-[2]">
                      <OridoCounter end={count.value} />
                    </h3>
                    <span className="title relative z-[2]">{count.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
