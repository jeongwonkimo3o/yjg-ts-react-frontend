import { useEffect, useState } from "react";
import CountCard from "../../salon/CountCard";
import { privateApi } from "../../../services/customAxios";
import { AxiosRequestConfig } from "axios";

function WeekendApplication() {
  // 주말 식수 신청 인원
  const [countWeekendMeal, setCountWeekendMeal] = useState({});
  // 리스트종류 스테이트
  const [listKind, setListKind] = useState<string>("sat");
  const kind = [
    {
      state: "sat",
      head: "토요일",
    },
    {
      state: "sun",
      head: "일요일",
    },
  ];

  // 페이지 렌더링 시
  useEffect(() => {
    getWeekendCountData({ date: listKind });
  }, []);

  // 주말 신청 인원 가져오기
  const getWeekendCountData = async (data: { date: string }) => {
    try {
      const config: AxiosRequestConfig = {
        params: data,
      };
      const getWeekendCount = await privateApi.get(
        "/api/restaurant/weekend/show/sumWeb",
        config
      );
      setCountWeekendMeal(getWeekendCount.data.applyData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="font-bold text-lg pl-4 pb-2">• 주말 식수 신청 현황</div>
      <div className="bg-white flex flex-col gap-5 w-[33rem] h-72 shadow-lg px-10 py-5 border border-black/10 rounded-xl overflow-auto">
        <div className="flex gap-4 items-end">
          {kind.map((v) => {
            return (
              <span
                className={`${
                  listKind === v.state
                    ? "font-bold text-xl text-blue-600"
                    : "text-gray-400"
                } cursor-pointer`}
                onClick={() => {
                  setListKind(v.state);
                  getWeekendCountData({ date: v.state });
                }}
              >
                {v.head}
              </span>
            );
          })}
        </div>
        <div className="flex gap-4 overflow-auto w-fit">
          {Object.entries(countWeekendMeal).map(([key, value]) => {
            return <CountCard header={key} count={Number(value)} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default WeekendApplication;
