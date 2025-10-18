import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">Bookish-spork</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
// import Menu from "@/components/Menu";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import Image from "next/image";

// export default function DashboardLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//       <div className="h-screen flex">
//         {/* left */}
//         <div className="h-full w-[21%] md:w-[15%] lg:w-[20%] xl:w-[18%] p-4 overflow-hidden flex flex-col">
//           <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
//             <Image src='/logo.png' alt='logo' width={32} height={32}/>
//             <span className="hidden lg:block">bookish-spork</span>
//           </Link>
//           <Menu />
//         </div>
//         {/* right */}
//         <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
//           <Navbar />
//           {children}
//         </div>
//       </div>
//   );
// }
