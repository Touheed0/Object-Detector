import ObjectDetection from "@/components/object-detection";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-8">
        <h1 className="gradient-title text-3xl font-extrabold md:text-5xl lg:text-7xl tracking-tighter md:px-6 text-center">
          Thief Detection Alarm
        </h1>
        <ObjectDetection />
      </div>
    </>
  );
}