"use client";

import { useEffect } from "react";

export default function LayoutConfig() {
  useEffect(() => {
    const initLayout = () => {
      if (
        typeof window !== "undefined" &&
        typeof (window as any).layout_change !== "undefined"
      ) {
        (window as any).layout_change("false");
        (window as any).layout_theme_sidebar_change("dark");
        (window as any).change_box_container("false");
        (window as any).layout_caption_change("true");
        (window as any).layout_rtl_change("false");
        (window as any).preset_change("preset-1");
        (window as any).main_layout_change("vertical");
        console.log(window);
      } else {
        // Tenta novamente após um delay
        setTimeout(initLayout, 100);
      }
    };

    initLayout();
  }, []);

  return null;
}
