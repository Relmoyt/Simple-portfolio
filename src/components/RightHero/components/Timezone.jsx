import { useState, useEffect } from "react";

const TimezoneWidget = ({ targetTimezone = "Africa/Cairo" }) => {
  const [timeData, setTimeData] = useState({
    timeStr: "00:00:00",
    dateStr: "",
    userTimeStr: "00:00",
    diffText: "(0h)",
    secDeg: 0,
    minDeg: 0,
    hourDeg: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const targetDateStr = now.toLocaleString("en-US", {
        timeZone: targetTimezone,
      });
      const targetDate = new Date(targetDateStr);

      const hours = targetDate.getHours();
      const minutes = targetDate.getMinutes();
      const seconds = targetDate.getSeconds();

      const secDeg = (seconds / 60) * 360;
      const minDeg = ((minutes + seconds / 60) / 60) * 360;
      const hourDeg = (((hours % 12) + minutes / 60) / 12) * 360;

      const hh = String(hours).padStart(2, "0");
      const mm = String(minutes).padStart(2, "0");
      const ss = String(seconds).padStart(2, "0");

      const formattedDate = targetDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      const offsetMinutes = -targetDate.getTimezoneOffset();
      const gmtHours = Math.floor(Math.abs(offsetMinutes) / 60);
      const gmtSign = offsetMinutes >= 0 ? "+" : "-";
      const fullDateStr = `${formattedDate} · GMT${gmtSign}${gmtHours}`;

      const userHours = String(now.getHours()).padStart(2, "0");
      const userMinutes = String(now.getMinutes()).padStart(2, "0");

      const diffInMs = targetDate - new Date(now.toLocaleString("en-US"));
      const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
      const diffText =
        diffInHours === 0
          ? "(-0h)"
          : `(${diffInHours > 0 ? "+" : ""}${diffInHours}h)`;

      setTimeData({
        timeStr: `${hh}:${mm}:${ss}`,
        dateStr: fullDateStr,
        userTimeStr: `${userHours}:${userMinutes}`,
        diffText,
        secDeg,
        minDeg,
        hourDeg,
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [targetTimezone]);

  return (
    <div className="w-full h-full bg-transparent backdrop-blur-md text-black font-sans p-4 rounded-2xl flex items-center gap-4">
      <div className="w-16 h-16 border-[2.5px] border-[#4e5058] rounded-full relative bg-[#111214] shrink-0">
        <div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom w-[2.5px] h-[16px] bg-[#f2f3f5] rounded-sm"
          style={{
            transform: `translateX(-50%) rotate(${timeData.hourDeg}deg)`,
          }}
        />
        <div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom w-[2.5px] h-[22px] bg-[#b5bac1] rounded-sm"
          style={{
            transform: `translateX(-50%) rotate(${timeData.minDeg}deg)`,
          }}
        />
        <div
          className="absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom w-[2px] h-[25px] bg-[#ed4245] rounded-sm"
          style={{
            transform: `translateX(-50%) rotate(${timeData.secDeg}deg)`,
          }}
        />
      </div>

      <div className="flex flex-col justify-center gap-0.5 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-black leading-none">
            {timeData.timeStr}
          </span>
          <span className="text-xs text-[#949ba4] font-medium flex items-center gap-1 opacity-75">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
            Timezone
          </span>
        </div>
        <div className="font-semibold text-sm text-[#b5bac1] tracking-wide">
          {timeData.dateStr}
        </div>
        <div className="text-xs text-[#80848e]">
          Your time: {timeData.userTimeStr}{" "}
          <span className="text-[#6d717b]">{timeData.diffText}</span>
        </div>
      </div>
    </div>
  );
};

export default TimezoneWidget;
