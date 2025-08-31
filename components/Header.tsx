// app/components/Header.tsx
import React from "react";
import vector from "/components/assets/vector.svg";

export const Header = () => {
  const navigationItems = [
    { label: "Search", isActive: true },
    { label: "Explore Causes", isActive: false },
  ];

  return (
    <header className="flex flex-col items-center justify-center px-10 py-4 relative">
      <div className="flex w-[1652px] h-[46.46px] items-center justify-between relative aspect-[35.56]">
        <div className="flex flex-col w-[334px] items-start relative">
          <h1 className="relative w-fit mt-[-1.00px] font-v0-be-satoshi-homepage-vercel-app-inter-semi-bold font-[number:var(--v0-be-satoshi-homepage-vercel-app-inter-semi-bold-font-weight)] text-[#f8f8f8] text-[length:var(--v0-be-satoshi-homepage-vercel-app-inter-semi-bold-font-size)] tracking-[var(--v0-be-satoshi-homepage-vercel-app-inter-semi-bold-letter-spacing)] leading-[var(--v0-be-satoshi-homepage-vercel-app-inter-semi-bold-line-height)] whitespace-nowrap [font-style:var(--v0-be-satoshi-homepage-vercel-app-inter-semi-bold-font-style)]">
            Be Satoshi
          </h1>
        </div>

        <nav
          className="inline-flex items-start justify-center gap-8 relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Main navigation"
        >
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={`${item.isActive ? "pt-0 pb-1.5 px-0 border-b-2 [border-bottom-style:solid] border-[#2f419d]" : ""} inline-flex flex-col items-start relative flex-[0_0_auto]`}
            >
              <a
                href="#"
                className={`relative w-fit ${item.isActive ? "mt-[-2.00px]" : "mt-[-1.00px]"} font-v0-be-satoshi-homepage-vercel-app-semantic-link font-[number:var(--v0-be-satoshi-homepage-vercel-app-semantic-link-font-weight)] ${item.isActive ? "text-[#f8f8f8]" : "text-[#929dbe]"} text-[length:var(--v0-be-satoshi-homepage-vercel-app-semantic-link-font-size)] tracking-[var(--v0-be-satoshi-homepage-vercel-app-semantic-link-letter-spacing)] leading-[var(--v0-be-satoshi-homepage-vercel-app-semantic-link-line-height)] whitespace-nowrap [font-style:var(--v0-be-satoshi-homepage-vercel-app-semantic-link-font-style)]`}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <button
            className="all-[unset] box-border inline-flex h-9 items-center justify-center gap-2 pt-[7.5px] pb-[8.5px] px-3 relative flex-[0_0_auto] rounded-md shadow-[0px_1px_2px_#0000000d] bg-[linear-gradient(90deg,rgba(47,66,157,1)_0%,rgba(152,16,250,1)_100%)]"
            type="button"
            aria-label="Canjear puntos"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f8f8f8] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
              canjear puntos
            </span>
          </button>

          <div
            className="inline-flex items-center gap-2 p-2 relative flex-[0_0_auto] bg-[#1a1c50] rounded-lg"
            role="status"
            aria-label="Points balance"
          >
      
          </div>

          <button
            className="flex flex-col w-5 items-start gap-2.5 px-[3px] py-[5px] relative"
            type="button"
            aria-label="Menu"
          >
            <img
              className="relative w-[16.67px] h-[11.67px] mt-[-0.83px] mb-[-0.83px] ml-[-0.83px] mr-[-1.83px]"
              alt="Menu icon"
              src={vector}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
