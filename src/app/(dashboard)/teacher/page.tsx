import BigCalendar from "@/components/bigCalendar";
import Announcements from "@/components/announcements";

const teacherPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-[calc(180vh-40px)] bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <div className="h-[calc(100%-100px)]">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default teacherPage;