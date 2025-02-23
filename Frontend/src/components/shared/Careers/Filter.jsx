import React from "react";
import SideBar from "./SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Cards from "./Cards";

function Filter(props) {
  return (
    <>
      <section className="filter_section w-[83%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
          <SidebarProvider>
            <SideBar />
          </SidebarProvider>

          {/* Cards */}
          <Cards handleJobCom={props.handleJobCom} />
        </div>
      </section>
    </>
  );
}

export default Filter;
