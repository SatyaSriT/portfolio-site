import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[rgba(251,243,232,1)] overflow-hidden">
      {/* Lavender bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#D8C9DE]" />

      {/* Narrow lavender left strip with wavy right edge */}
      <Image
        src="/left-strip.svg"
        alt=""
        width={110}
        height={900}
        className="absolute inset-0 h-full w-auto"
        style={{ left: 0, top: 0 }}
      />

      {/* Illustration + decorations — absolutely positioned, left-aligned */}
      <div className="absolute left-0 bottom-0 w-[44%] h-full">
        {/* Smiley */}
        <Image
          src="/smiley.png"
          alt="smiley"
          width={100}
          height={100}
          className="absolute z-20"
          style={{ left: "12%", top: "30%" }}
        />

        {/* Navy sparkle — below smiley, slightly overlapping it */}
        <Image
          src="/stars.png"
          alt="navy sparkle"
          width={90}
          height={145}
          className="absolute z-20"
          style={{ left: "20%", top: "45%" }}
        />

        {/* Portrait illustration — bottom-aligned, fills most of height */}
        <Image
          src="/illustration.svg"
          alt="Satya Sri illustration"
          width={500}
          height={680}
          className="absolute bottom-0 z-10 object-contain"
          style={{ left: "10%" }}
          priority
        />

        {/* Yellow sparkle — right of face in gap before text, at glasses level */}
        <Image
          src="/yellow_stars.png"
          alt="yellow sparkle"
          width={85}
          height={136}
          className="absolute z-20"
          style={{ left: "68%", top: "40%" }}
        />
      </div>

      {/* Text content — right side */}
      <div className="relative flex items-start min-h-screen pt-[22%]">
        <div className="ml-[46%] pr-8">
          <p
            className="text-[#1B3A6B] mb-1"
            style={{
              fontFamily: "var(--font-fredoka)",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "-0.04em",
            }}
          >Hello !</p>
          <h1
            className="text-[#1B3A6B]"
            style={{
              fontFamily: "var(--font-delicious-handrawn)",
              fontWeight: 400,
              fontSize: "98px",
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
            className="w-full max-w-[420px] mb-3"
            style={{ marginTop: "-6px" }}
          />

          <h2
            className="text-[#1B3A6B] mb-5"
            style={{
              fontFamily: "var(--font-fredoka)",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "100%",
              letterSpacing: "-0.04em",
            }}
          >
            Senior Frontend Engineer
          </h2>
          <p
            className="text-[#1B3A6B] max-w-md"
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 400,
              fontSize: "18px",
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
      </div>
    </main>
  );
}
