/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

import data from "~/lib/data";

const GanttChart = () => {
  const container = useRef<HTMLElement | any | undefined>(null);

  useEffect(() => {
    const loadGantt = async () => {
      const gantt: any = (await import("dhtmlx-gantt")).default;

      gantt.init(container.current);
      gantt.parse(data);
    };

    loadGantt();
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100vh" }}></div>;
};

export default GanttChart;
