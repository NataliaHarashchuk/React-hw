import { useEffect, useState } from "react";

export const useDate = () => {
  const [currentDate, setCurrentDate] = useState<string>(() => {
    return new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      setCurrentDate((prev) => (prev !== newDate ? newDate : prev));
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return currentDate;
};
