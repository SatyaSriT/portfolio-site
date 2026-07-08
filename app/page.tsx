import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[rgba(251,243,232,1)] overflow-hidden">
      {/* Lavender bottom strip */}
      <Image
        src="/bottom-strip.svg"
        alt=""
        width={1440}
        height={64}
        className="absolute bottom-0 left-0 w-full h-auto"
      />

      {/* Narrow lavender left strip with wavy right edge */}
      <Image
        src="/left-strip.svg"
        alt=""
        width={110}
        height={900}
        className="absolute inset-0 h-full w-auto z-10"
        style={{ left: 0, top: 0 }}
      />

      {/* Desktop illustration — hidden on mobile */}
      <div className="hidden md:block absolute left-0 bottom-0 w-[44%] h-full z-10">
        <Image
          src="/smiley.png"
          alt="smiley"
          width={100}
          height={100}
          className="absolute z-20"
          style={{ left: "12%", top: "30%" }}
        />
        <Image
          src="/stars.png"
          alt="navy sparkle"
          width={90}
          height={145}
          className="absolute z-20"
          style={{ left: "20%", top: "45%" }}
        />
        <Image
          src="/illustration.svg"
          alt="Satya Sri illustration"
          width={500}
          height={680}
          className="absolute bottom-0 z-10 object-contain"
          style={{ left: "10%" }}
          priority
        />
        <Image
          src="/yellow_stars.png"
          alt="yellow sparkle"
          width={85}
          height={136}
          className="absolute z-20"
          style={{ left: "68%", top: "40%" }}
        />
      </div>

      {/* Layout wrapper — column on mobile, block on desktop */}
      <div className="relative z-20 flex flex-col min-h-screen md:block">

        {/* Text content */}
        <div className="pl-[110px] pr-6 pt-12 pb-6 md:pt-[22%] md:ml-[46%] md:pl-0 md:pr-8">
          <p
            className="text-[#1B3A6B] mb-1"
            style={{
              fontFamily: "var(--font-fredoka)",
              fontWeight: 400,
              fontSize: "clamp(22px, 5vw, 32px)",
              lineHeight: "100%",
              letterSpacing: "-0.04em",
            }}
          >
            Hello !
          </p>
          <h1
            className="text-[#1B3A6B]"
            style={{
              fontFamily: "var(--font-delicious-handrawn)",
              fontWeight: 400,
              fontSize: "clamp(48px, 11vw, 98px)",
              lineHeight: "100%",
              letterSpacing: "-0.04em",
            }}
          >
            I&apos;m Satya Sri
          </h1>

          {/* Brush stroke underline under name */}
          <Image
            src="/name-stroke.svg"
            alt=""
            width={420}
            height={18}
            className="w-full max-w-[200px] md:max-w-[420px] mb-2 md:mb-3"
            style={{ marginTop: "-4px" }}
          />

          <h2
            className="text-[#1B3A6B] mb-4 md:mb-5"
            style={{
              fontFamily: "var(--font-fredoka)",
              fontWeight: 400,
              fontSize: "clamp(20px, 5vw, 32px)",
              lineHeight: "100%",
              letterSpacing: "-0.04em",
            }}
          >
            Senior Frontend Engineer
          </h2>
          <p
            className="text-[#1B3A6B] max-w-[260px] md:max-w-md"
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 400,
              fontSize: "clamp(14px, 3.5vw, 18px)",
              lineHeight: "140%",
              letterSpacing: "-0.02em",
            }}
          >
            Building scalable, accessible, and delightful web experiences.
            Currently at{" "}
            <span className="bg-[#F5C842] px-1 rounded-sm font-medium">
              HashedIn by Deloitte 🔧
            </span>, formerly AntStack 🐜.
          </p>
        </div>

        {/* Mobile illustration — fills remaining space below text */}
        <div className="md:hidden flex-1 relative min-h-[44vh] pb-12">
          <Image
            src="/illustration.svg"
            alt="Satya Sri illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </main>
  );
}
